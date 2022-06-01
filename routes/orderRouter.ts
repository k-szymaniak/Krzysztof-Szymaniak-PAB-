import express from 'express';
import {Request, Response} from 'express';
import orderModels from '../models/orderModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const order = new orderModels({
        worker:req.body.worker,
        dish:req.body.dish,
        status:req.body.status,
        table:req.body.table,
        price:req.body.price
    })
    const saveorder = await order.save();
    res.status(201).json(order);
})

router.get('/',async (req:Request, res:Response) => {
    const order = await orderModels.find();
    res.status(201).send(order);
})

router.put('/:id',async (req:Request, res:Response) => {
    const order = await orderModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(order);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const order = await orderModels.findByIdAndDelete(req.params.id)
    res.status(201).json(order);
})

module.exports = router;