import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products:[{
        type:mongoose.ObjectId,
        ref:"Products",
    },],
    payment:{},
    buyers:{
        type:mongoose.ObjectId,
        ref:"users"
    },
    status:{
        type:String,
        default:'Not Processed',
        enum:["Not Processed", "Processing", "Shipped","Delivered","cancelled"]
    },
},{timestamps:true})

export default mongoose.model('Order', orderSchema)