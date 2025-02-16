import express from "express";
import { getAllRecords, createRecords, updateRecord, getRecordsByProperty } from "../controllers/LoanedRecordControllers.js";
import { Schemas, validateSchema } from "../middlewares/validation.js";


const router = express.Router();

// Routes
router.get(
    "/",

    getAllRecords
);

router.post(
    "/",
    validateSchema(Schemas.loan.create, 'body'), 
    createRecords
);

router.put(
    "/",
    validateSchema(Schemas.loan.update, 'body'), 
    updateRecord
);

router.post(
    "/query", 
    validateSchema(Schemas.loan.query, 'body'), 
    getRecordsByProperty
);

export default router;