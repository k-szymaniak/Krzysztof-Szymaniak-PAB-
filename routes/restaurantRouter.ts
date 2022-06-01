import express from 'express';
import {Request, Response} from 'express';
import restaurantModels from '../models/restaurantModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const restaurant = new restaurantModels({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        nip:req.body.nip,
        email:req.body.email,
        www:req.body.www,
    })
    const saverestaurant= await restaurant.save();
    res.status(201).json(restaurant);
})

router.get('/',async (req:Request, res:Response) => {
    const restaurant = await restaurantModels.find();
    res.status(201).json(restaurant);
})

router.put('/:id',async (req:Request, res:Response) => {
    const restaurant = await restaurantModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(restaurant);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const restaurant = await restaurantModels.findByIdAndDelete(req.params.id)
    res.status(201).json(restaurant);
})

module.exports = router;