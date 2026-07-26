const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Import Routes
const userRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");
const roommateRoutes = require("./routes/roommateRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

// Initialize Express
const app = express();

// ==============================
// Middleware
// ==============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ==============================
// API Routes
// ==============================

app.use("/api/users", userRoutes);

app.use("/api/rooms", roomRoutes);

app.use("/api/roommates", roommateRoutes);

app.use("/api/orders", orderRoutes);

// ==============================
// Home Route
// ==============================

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "Welcome to Hostel Management API",

        version: "1.0.0"

    });

});

// ==============================
// 404 Route
// ==============================

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route Not Found"

    });

});

// ==============================
// Global Error Handler
// ==============================

app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});

// ==============================
// Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`====================================`);
    console.log(`🚀 Server Running Successfully`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log(`====================================`);

});