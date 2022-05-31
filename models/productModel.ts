import mongoose from "mongoose";
const product = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    value:{
        type:String,
        enum:['g','dg','kg','t'],
        default:'g',
        required:true
    }
    
})

const productModels = mongoose.model('product',product)
export default productModels;