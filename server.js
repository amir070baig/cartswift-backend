const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const productRoutes = require("./routes/productRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: process.env.FRONTEND_URL, 
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

app.use("/api/products", productRoutes);
app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
