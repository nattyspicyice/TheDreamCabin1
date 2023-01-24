import mongoose from "mongoose";

const dreamSchema = mongoose.Schema({
    entry: String,
    hoursOfSleep: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Dream = mongoose.model('Dream', dreamSchema);

export default Dream;