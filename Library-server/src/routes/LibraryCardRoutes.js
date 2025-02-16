import express from 'express'
import { getLibraryCard, createLibraryCard } from "../controllers/LibraryCardController.js"
import { Schemas , validateSchema} from '../middlewares/validation.js';


const router = express.Router();

// Routes
router.get(
    "/:cardId",
    validateSchema(Schemas.libraryCard.get, 'params'),
    getLibraryCard
);


router.post(
    "/",
    validateSchema(Schemas.libraryCard.create, 'body'), 
    createLibraryCard
);

export default router;