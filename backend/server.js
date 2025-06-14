import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
//must include .js at the end and also export it from that particular file
import productRoutes from "./routers/productRouters.js"

//working of environmental variable 

import dotenv from "dotenv"

dotenv.config();
const PORT = process.env.PORT;
console.log(PORT)



const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//for made everything simple we create router and controller folders so we didnt specify API here ,

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log("Server is running in port "+PORT);
})