import mongoose from "mongoose";

const dish = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        require:true,
    },
    category: {
        type:String,
        required:true,
    },
})

const dishModels = mongoose.model('dish',dish)
export default dishModels;