const  protect  = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
    getOrders,
    addOrder,
    getOrderById,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");

router.get("/", protect, getOrders);

router.get("/:id", protect, getOrderById);

router.post("/", protect, addOrder);

router.put("/:id", protect, updateOrder);

router.delete("/:id", protect, deleteOrder);

module.exports = router;