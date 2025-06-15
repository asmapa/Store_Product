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
    const newproduct = await query("insert into productstore(name,price,) ")
  } catch (err) {
    
  }
};
export const getProduct = async (req, res) => {};
export const updateProduct = async (req, res) => {};
export const deleteProduct = async(req, res) => {};