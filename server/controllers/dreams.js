//imports model
import Dream from '../models/dreamModel.js';
import mongoose from 'mongoose';

//exporting CRUD functions

//READ
export const getDreams = async (req, res) => {
    const { entry, hoursOfSleep } = req.body
    try {
        const dreams = await Dream.find({ entry, hoursOfSleep });
        console.log(dreams);
        res.status(200).json(dreams);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

//CREATE
export const createDream = async (req, res) => {
    const { entry, hoursOfSleep } = req.body
    const newDream = new Dream({ entry, hoursOfSleep });

    try {
        await newDream.save();
        res.status(201).json(newDream);
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};

//UPDATE
export const updateDream = async (req, res) => {
    try{

    } catch(error){

    }
}

//DELETE
export const deleteDream = async (req, res) => {
    try{

    } catch(error){
        
    }
}