import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Halaman Masih kosong Bro Bro Ku...!!</h1>");
});

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("server is running pada port 5000");
});
