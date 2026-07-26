const mongoose = require("mongoose");

const roommateSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    college:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    budget:{
        type:Number,
        required:true
    },

    foodPreference:{
        type:String,
        required:true
    },

    smoking:{
        type:String,
        required:true
    },

    bio:{
        type:String
    },

    contact:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

module.exports = mongoose.model("Roommate", roommateSchema);