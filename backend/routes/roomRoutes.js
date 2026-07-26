const protect  = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
    getRooms,
    addRoom,
    getRoomById,
    updateRoom,
    deleteRoom
} = require("../controllers/roomController");

router.get("/", getRooms);

router.get("/:id", getRoomById);

router.post("/", protect, addRoom);

router.put("/:id", protect, updateRoom);

router.delete("/:id", protect, deleteRoom);

module.exports = router;