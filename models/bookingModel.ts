import mongoose from "mongoose";
const booking = new mongoose.Schema({
    table: {
        type: String,
        required: true,
    },
    start: {
        type:Number,
        require:true,
    },
    end: {
        type:Number,
        required:true,
    },
    client: {
        type:String,
        required:true,
    },
})

const bookingModels = mongoose.model('booking',booking)
export default bookingModels;