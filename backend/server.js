import express from "express";

const app = express();

app.get("/test", (req, res) => {
    res.send("Hello server is running");
})

app.listen(3000, () => {
    console.log("Server is running in port 3000");
})