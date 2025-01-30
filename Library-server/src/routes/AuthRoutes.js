import { handleLogin, handleRegister } from '../controllers/AuthControllers.js';
import express from 'express';
import { Schemas, validateUserSchema } from '../middlewares/validation.js';

const router = express.Router();

// Route for user registration with schema validation
router.post(
    '/register',
    validateUserSchema(Schemas.user.create, 'body'), 
    handleRegister
);

router.post(
    '/login', 
    validateUserSchema(Schemas.user.login, 'body'),
    handleLogin
);

export default router;