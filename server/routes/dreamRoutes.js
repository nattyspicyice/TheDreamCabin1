//Import
import express from "express";
import { getDreams, createDream } from "../controllers/dreams";

//Route Setup
const router = express.Router();

//Routes
router.get('/', getDreams);
router.get('/', createDream)

//Export
export default router;