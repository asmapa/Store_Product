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
    const prod = await query(`select *from productstore where id=$1`, [id]);
    console.log("success in fetching single data", prod.rows[0]);
  } catch (err) {
    console.log("error while fetching data using id ", err);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, price, image } = req.body
  
  try {
    const { rows } = await query(`update productstore set name=$1,price=$2,image=$3 where id=$4 returing *`, [name, price, image, id]);
  } catch (err) {
    console.log("error while updation....", err);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
export const deleteProduct = async(req, res) => {};