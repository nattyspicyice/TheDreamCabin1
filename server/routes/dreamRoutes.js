//Import
import express from "express";

//imported functions from controllers
import { getDream, getAllDreams, createDream, deleteDream, updateDream } from "../controllers/dreams.js";

//Router Setup
const router = express.Router();

//Routes
router.get('/', getAllDreams);
router.get('/:id', getDream);
router.post('/', createDream);
router.patch('/:id', updateDream)
router.delete('/:id', deleteDream)

//Export
export default router;