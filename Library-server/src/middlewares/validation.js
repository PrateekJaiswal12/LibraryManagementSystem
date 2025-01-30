import Joi from "joi";
import { User } from "../daos/userDaos.js";



export function validateUserSchema(schema, property) {
    return async (req, res, next) => {
        try {
            switch (property) {
                case 'query':
                    await schema.validateAsync(req.query);
                break;
                
                case 'params':
                    await schema.validateAsync(req.params);
                break;
                
                default:
                    await schema.validateAsync(req.body);

                break;
            }
            next();
        } catch (error) {
            return res.status(422).json({message: "Object validation failed, please include valid object", error: error.message});
        }
    };
}

export const Schemas = {
    user : {
        create: Joi.object({
            type: Joi.string().valid('ADMIN', 'EMPLOYEE', 'PATRON').required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
            password: Joi.string().required()
        }),
        login: Joi.object({
            email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
            password: Joi.string().required()
        }),
        userId: Joi.object({
            userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        update: Joi.object({
            _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
            password: Joi.string()
        })
    }
};

export default { Schemas, validateUserSchema };