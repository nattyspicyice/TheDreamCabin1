import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dreamRoutes from './routes/dreamRoutes.js'

//General Setup
const app = express();

//Routes
app.get('/', (req, res) => {
    res.send("Express is here")
})

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Express Middleware to connect router application
app.use('/dreams', dreamRoutes)


//MongoDB Setup
const CONNECTION_URL = "mongodb+srv://nattyspickle:nattyspickle@sei.ssf6lll.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 8000;

mongoose.set('strictQuery', true);

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.connect(CONNECTION_URL).then(()=> {console.log('Connected to Mongo')});
