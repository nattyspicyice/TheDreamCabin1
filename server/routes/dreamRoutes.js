//Import
import express from "express";

//imported functions from controllers
import { getDream, getAllDreams, createDream, deleteDream, updateDream } from "../controllers/dreams.js";

//Router Setup
const router = express.Router();

//Routes
router.get('/', getAllDreams);
router.get('/:id', getDream);
router.put('/:id', updateDream);
router.post('/', createDream);
router.delete('/:id', deleteDream);

//Export
export default router;