import express from 'express';
import {Request, Response} from 'express';
import tableModels from '../models/tableModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const table = new tableModels({
        name:req.body.name,
        numberofseats:req.body.numberofseats,
        status:req.body.status
    })
    const savetable = await table.save();
    res.status(201).json(table);
})

router.get('/',async (req:Request, res:Response) => {
    const table = await tableModels.find();
    res.status(201).send(table);
})

router.put('/:id',async (req:Request, res:Response) => {
    const table = await tableModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(table);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const table = await tableModels.findByIdAndDelete(req.params.id)
    res.status(201).json(table);
})

module.exports = router;