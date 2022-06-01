import  express  from "express";
import mongoose from "mongoose";
import { main } from "./db";

const app = express();
app.use(express.json())

main();

const danie = require('./routes/dishRouter');
app.use('/dish', danie);

const worker = require('./routes/workerRouter');
app.use('/worker', worker);

const product = require('./routes/productRouter');
app.use('/product', product);

const restaurant = require('./routes/restaurantRouter');
app.use('/restaurant', restaurant);

const rezerwacaja = require('./routes/bookingRouter');
app.use('/booking', rezerwacaja);

const table = require('./routes/tableRouter');
app.use('/table', table);

const order = require('./routes/orderRouter');
app.use('/order', order);


app.listen(3000)