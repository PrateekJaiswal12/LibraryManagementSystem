import express from 'express';
import { getAllBooks, createBook, updateBook, deleteBook, searchForBooksByQuery } from '../controllers/BookControllers.js'; 
import { Schemas, validateSchema } from '../middlewares/validation.js';

const router = express.Router();

// Routes
router.get(
    "/",
    getAllBooks
);

router.post(
    "/",
    validateSchema(Schemas.book.create, 'body') ,
    createBook
);

router.put(
    "/",
    validateSchema(Schemas.book.update, 'body'), 
    updateBook
);

router.delete(
    "/:barcode", 
    validateSchema(Schemas.book.delete, 'params'),
    deleteBook
);

router.get("/query", searchForBooksByQuery);

export default router;