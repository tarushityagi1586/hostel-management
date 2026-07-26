const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    serviceType:{
        type:String,
        required:true
    },

    itemName:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Pending"
    }

},{
    timestamps:true
});

module.exports = mongoose.model("Order",orderSchema);