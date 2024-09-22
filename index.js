const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const PORT = process.env.PORT || 5000;


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

// app.get("/api/test", () => {
//     console.log("Test is successful !");
// }); instead 

const allowedOrigins = ['https://voguevault.netlify.app/']; 

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Enable this if you are using cookies or sessions
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://voguevault.netlify.app/"); // Allow requests from your Netlify frontend
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(PORT, () => {
    console.log(`Backend server is running! on port ${PORT}`);
  });