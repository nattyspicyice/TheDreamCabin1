//Import
import express from "express";

//imported functions from controllers
import { getDreams, createDream } from "../controllers/dreams.js";

//Router Setup
const router = express.Router();

//Routes
router.get('/', getDreams);
router.post('/', createDream);

//Export
export default router;