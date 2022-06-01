import express from 'express';
import {Request, Response} from 'express';
import workerModels from '../models/workerModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const worker = new workerModels({
        name:req.body.name,
        surname:req.body.surname,
        position:req.body.position
    })
    const saveworker = await worker.save();
    res.status(201).json(worker);
})

router.get('/',async (req:Request, res:Response) => {
    const worker = await workerModels.find();
    res.status(201).send(worker);
})


router.put('/:id',async (req:Request, res:Response) => {
    const worker = await workerModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(worker);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const worker = await workerModels.findByIdAndDelete(req.params.id)
    res.status(201).json(worker);
})

module.exports = router;