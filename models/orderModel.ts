import mongoose from "mongoose";

 const order = new mongoose.Schema({
    worker:{
        type:String,
        required:true,
    },
    dish:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    table:{
        type:String,
        enum:['ordered','during','end','bill'],
        required:true
    },
    price:{
        type:Number,
        required:true
    }    
})
const orderModels = mongoose.model('order',order)
export default orderModels;