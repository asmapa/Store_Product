import {query} from  "../db.js"


export const getProducts = async (req, res) => {
   try {
  const result = await query("SELECT * FROM productstore");
  res.status(200).json({ success: true, data: result.rows });
} catch (err) {
  console.error("Error fetching products:", err);
  res.status(500).json({ error: "Internal server error" });
}
 
}; 
export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    res.status(400).json({success:false,message:"All fields are required...."})
  }

  try {
    const {rows} = await query(
      `INSERT INTO productstore(name, price, image) VALUES ($1, $2, $3)`,
      [name, price, image]
    );
    return rows[0];
  } catch (err) {
    console.log("Error while inserting values in product store....", err);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await query(`select *from productstore where id=$1`, [id]);
    res.status(200).json({ success: true, data: rows[0] });
    
  } catch (err) {
    console.log("error while fetching data using id ", err);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  try {
    const { rows } = await query(
      `UPDATE productstore SET name = $1, price = $2, image = $3 WHERE id = $4 RETURNING *`,
      [name, price, image, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: rows[0] });
  } catch (err) {
    console.log("error while updating...", err);
    res.status(500).json({ success: false, message: "Server error during product update" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await query(`delete from productstore where id=$1 RETURNING *`, [id]);
    res.status(200).json({ success: true, data: rows[0] });
  } catch (err) {
    console.log("error while deleteing data.....", err);
    res.status(500).json({success:false,message:"internal server error"})
  }
};