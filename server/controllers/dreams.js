//imports model
import Dream from '../models/dreamModel.js';

//exporting CRUD functions
export const getDreams = async (req, res) => {
    try {
        const dreams = await Dream.find({entry: req.body.entry, hoursOfSleep: req.body.hoursOfSleep});
        console.log(dreams);
        res.status(200).json(dreams);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const createDream = async (req, res) => {
    const dream = req.body
    const newDream = new Dream(dream);

    try {
        await newDream.save({entry: req.body.entry, hoursOfSleep: req.body.hoursOfSleep});
        res.status(201).json(dream);
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};