import mongoose  from "mongoose";

const restaurant = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phone: {
        type:Number,
        required:true,
    },
    nip:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:false,
    },
    www:{
        type:String,
        required:true,
    }
})
const restaurantModels = mongoose.model('restaurant',restaurant)
export default restaurantModels;