import express from 'express';
import {Request, Response} from 'express';
import productModels from '../models/productModel';
const router = express.Router();
const app = express();

//GET
app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const product = new productModels({
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity,
        value:req.body.value
    })
    const saveproduct= await product.save();
    res.status(201).json(product);
})

router.get('/',async (req:Request, res:Response) => {
    const product = await productModels.find();
    res.status(201).send(product);
})

router.put('/:id',async (req:Request, res:Response) => {
    const product = await productModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(product);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const product = await productModels.findByIdAndDelete(req.params.id)
    res.status(201).json(product);
})

module.exports = router;