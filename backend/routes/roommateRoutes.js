const  protect  = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
    getRoommates,
    addRoommate,
    getRoommateById,
    updateRoommate,
    deleteRoommate
} = require("../controllers/roommateController");

router.get("/", getRoommates);

router.get("/:id", getRoommateById);

router.post("/", protect, addRoommate);

router.put("/:id", protect, updateRoommate);

router.delete("/:id", protect, deleteRoommate);

module.exports = router;