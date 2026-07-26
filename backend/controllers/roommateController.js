const Roommate = require("../models/Roommate");

// Get All Roommates
const getRoommates = async(req,res)=>{

    try{

        const roommates = await Roommate.find();

        res.status(200).json({
            success:true,
            count:roommates.length,
            roommates
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Add Roommate
const addRoommate = async(req,res)=>{

    try{

        const roommate = await Roommate.create(req.body);

        res.status(201).json({
            success:true,
            message:"Roommate Added Successfully",
            roommate
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Get Single Roommate
const getRoommateById = async(req,res)=>{

    try{

        const roommate = await Roommate.findById(req.params.id);

        if(!roommate){

            return res.status(404).json({
                success:false,
                message:"Roommate Not Found"
            });

        }

        res.status(200).json({
            success:true,
            roommate
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Update Roommate
const updateRoommate = async(req,res)=>{

    try{

        const roommate = await Roommate.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!roommate){

            return res.status(404).json({
                success:false,
                message:"Roommate Not Found"
            });

        }

        res.status(200).json({
            success:true,
            message:"Roommate Updated",
            roommate
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Delete Roommate
const deleteRoommate = async(req,res)=>{

    try{

        const roommate = await Roommate.findByIdAndDelete(req.params.id);

        if(!roommate){

            return res.status(404).json({
                success:false,
                message:"Roommate Not Found"
            });

        }

        res.status(200).json({
            success:true,
            message:"Roommate Deleted Successfully"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports = {
    getRoommates,
    addRoommate,
    getRoommateById,
    updateRoommate,
    deleteRoommate
};