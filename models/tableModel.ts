import mongoose from "mongoose";

const table = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    numberofseats: {
        type:Number,
        require:true,
    },
    status: {
        type:String,
        enum:['free', 'busy','inaccessible'],
        default:'free',
        required:true,
    },
})
const tableModels = mongoose.model('table',table)
export default tableModels;