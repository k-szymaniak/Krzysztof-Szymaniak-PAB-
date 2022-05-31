import { ChangeStreamDocument } from "mongodb";
import mongoose from "mongoose";

const connString = 'mongodb+srv://kszymaniak:Kkomar693@cluster0.bagox.mongodb.net/?retryWrites=true&w=majority'



export const main = () => {
    console.log('Connecting to mongo');
    const db = mongoose.connect(connString)
    console.log('Mongo Connected!')
}