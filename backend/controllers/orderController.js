const Order = require("../models/Order");

// Get All Orders
const getOrders = async (req,res)=>{

    try{

        const orders = await Order.find();

        res.status(200).json({
            success:true,
            count:orders.length,
            orders
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Add Order
const addOrder = async(req,res)=>{

    try{

        const order = await Order.create(req.body);

        res.status(201).json({
            success:true,
            message:"Order Placed Successfully",
            order
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Get One Order
const getOrderById = async(req,res)=>{

    try{

        const order = await Order.findById(req.params.id);

        if(!order){

            return res.status(404).json({
                success:false,
                message:"Order Not Found"
            });

        }

        res.status(200).json({
            success:true,
            order
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Update Order
const updateOrder = async(req,res)=>{

    try{

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!order){

            return res.status(404).json({
                success:false,
                message:"Order Not Found"
            });

        }

        res.status(200).json({
            success:true,
            message:"Order Updated",
            order
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Delete Order
const deleteOrder = async(req,res)=>{

    try{

        const order = await Order.findByIdAndDelete(req.params.id);

        if(!order){

            return res.status(404).json({
                success:false,
                message:"Order Not Found"
            });

        }

        res.status(200).json({
            success:true,
            message:"Order Deleted Successfully"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports = {
    getOrders,
    addOrder,
    getOrderById,
    updateOrder,
    deleteOrder
};