//imports model
import mongoose from 'mongoose';
import Dream from '../models/dreamModel.js';

//exporting CRUD functions

//READ ONE DREAM (GET SINGLE DREAM)
export const getDream = async (req, res) => {
    const {id} = req.params
    
    const dream = await Dream.findById(id)

    if (!dream) {
        return res.status(404).json({error: 'No Such Dream Exists'})
    }

    res.status(200).json(dream)
}

//READ ALL (GET ALL)
export const getAllDreams = async (req, res) => {
    try {
        const dreams = await Dream.find({});
        console.log(dreams);
        res.status(200).json(dreams);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

//CREATE (POST)
export const createDream = async (req, res) => {
    const { entry, hoursOfSleep } = req.body
    const newDream = new Dream({ entry, hoursOfSleep });

    try {
        await newDream.save();
        res.status(200).json(newDream);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

//UPDATE (PUT or PATCH)
export const updateDream = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Dream Exists'})
    }  

    const dream = await Dream.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!dream) {
        return res.status(400).json({error: 'No Such Dream Exists'})
    }

    res.status(200).json(dream);
}

//DELETE (DELETE)
export const deleteDream = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Dream Exists'})
    }

    const dream = await Dream.findOneAndDelete({_id: id})

    if (!dream) {
        return res.status(400).json({error: 'No Such Dream Exists'})
    }

    res.status(200).json(dream)
}