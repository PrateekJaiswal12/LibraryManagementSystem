import express from 'express'
import {  getAllUsers, getUserById, updateUser, deleteUser  } from "../controllers/UserControllers.js"
import { Schemas, validateSchema } from '../middlewares/validation.js';

const router = express.Router();

// User Routes
router.get(
    "/",
    getAllUsers
);

router.get(
    "/:userId", 
    validateSchema(Schemas.user.userId, 'params'),  
    getUserById
);

router.put(
    "/",
    validateSchema(Schemas.user.update, 'body'), 
    updateUser
);
router.delete(
    "/:userId", 
    validateSchema(Schemas.user.userId, 'params'), 
    deleteUser
);

export default router;