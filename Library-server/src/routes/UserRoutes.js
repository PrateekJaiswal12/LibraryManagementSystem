import express from 'express'
import {  getAllUsers, getUserById, updateUser, deleteUser  } from "../controllers/UserControllers.js"
import { Schemas, validateUserSchema } from '../middlewares/validation.js';

const router = express.Router();

// User Routes
router.get(
    "/",
    getAllUsers
);

router.get(
    "/:userId", 
    validateUserSchema(Schemas.user.userId, 'params'),  
    getUserById
);

router.put(
    "/",
    validateUserSchema(Schemas.user.update, 'body'), 
    updateUser
);
router.delete(
    "/:userId", 
    validateUserSchema(Schemas.user.userId, 'params'), 
    deleteUser
);

export default router;