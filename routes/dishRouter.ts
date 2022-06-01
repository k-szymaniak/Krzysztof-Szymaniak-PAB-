import express from 'express';
import {Request, Response} from 'express';
import dishModels from '../models/dishModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const dish = new dishModels({
        name:req.body.name,
        price:req.body.price,
        category:req.body.category
    })
    const saveDish = await dish.save();
    res.status(201).json(dish);
})

router.get('/',async (req:Request, res:Response) => {
    const dish = await dishModels.find();
    res.status(201).send(dish);
})

router.put('/:id',async (req:Request, res:Response) => {
    const dish = await dishModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(dish);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const dish = await dishModels.findByIdAndDelete(req.params.id)
    res.status(201).json(dish);
})

module.exports = router;