import express from 'express';
import {Request, Response} from 'express';
import bookingModels from '../models/bookingModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const booking = new bookingModels({
        table:req.body.table,
        start:req.body.start,
        end:req.body.end,
        client:req.body.client,
    })
    const savebooking= await booking.save();
    res.status(201).json(booking);
})

router.get('/',async (req:Request, res:Response) => {
    const booking = await bookingModels.find();
    res.status(201).json(booking);
})

router.put('/:id',async (req:Request, res:Response) => {
    const booking = await bookingModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(booking);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const booking = await bookingModels.findByIdAndDelete(req.params.id)
    res.status(201).json(booking);
})

module.exports = router;