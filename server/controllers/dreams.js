import Dream from "../models/dreamModel";

export const getDreams = async (req, res) => {
    try {
        const dreams = await Dream.find();
        console.log(dreams)
        res.status(200).json(dreams)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createDream = async (req, res) => {
    const body = req.body;
    const newDream = new Dream(dream);

    try {
        await newDream.save();
        res.status(201).json(newDream);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}