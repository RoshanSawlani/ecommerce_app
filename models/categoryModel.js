import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        undefined
    },
    slug:{
        type:String,
        lowercase:true,
    }
})

export default mongoose.model('Category', categorySchema)