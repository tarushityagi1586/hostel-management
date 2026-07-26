const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    rent: {
        type: Number,
        required: true
    },

    roomType: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: ""
    },

    ownerName: {
        type: String,
        required: true
    },

    ownerPhone: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Room", roomSchema);