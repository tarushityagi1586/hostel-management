const Room = require("../models/Room");

// Get All Rooms
const getRooms = async (req, res) => {

    try {

        const rooms = await Room.find();

        res.status(200).json({
            success: true,
            count: rooms.length,
            rooms
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Add New Room
const addRoom = async (req, res) => {

    try {

        const room = await Room.create(req.body);

        res.status(201).json({
            success: true,
            message: "Room Added Successfully",
            room
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Single Room
const getRoomById = async (req, res) => {

    try {

        const room = await Room.findById(req.params.id);

        if (!room) {

            return res.status(404).json({
                success: false,
                message: "Room Not Found"
            });

        }

        res.status(200).json({
            success: true,
            room
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Room
const updateRoom = async (req, res) => {

    try {

        const room = await Room.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!room) {

            return res.status(404).json({
                success: false,
                message: "Room Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Room Updated",
            room
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Room
const deleteRoom = async (req, res) => {

    try {

        const room = await Room.findByIdAndDelete(req.params.id);

        if (!room) {

            return res.status(404).json({
                success: false,
                message: "Room Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Room Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getRooms,
    addRoom,
    getRoomById,
    updateRoom,
    deleteRoom
};