import mongoose from "mongoose";

const dreamSchema = mongoose.Schema({
    entry: {
        type: String,
        required: true
    },
    hoursOfSleep: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Dream = mongoose.model('Dream', dreamSchema);

export default Dream;