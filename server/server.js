import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import dreamRoutes from './routes/dreamRoutes.js'

//express set up
const app = express();

//Middleware
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//routes
app.use('/', dreamRoutes)

//MongoDB Setup
const PORT = process.env.PORT || 8000;

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))