import mongoose from "mongoose";

const weroker = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    surname:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    },
})

const werokerModels = mongoose.model('weroker',weroker)
export default werokerModels;