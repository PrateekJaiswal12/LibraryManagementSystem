import Joi from "joi";

export function validateSchema(schema, property) {
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
            return res.status(422).json({ 
                message: "Object validation failed, please include a valid object", 
                error: error.message 
            });
        }
    };
}

export const Schemas = {
    user: {
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
            type: Joi.string().valid('ADMIN', 'EMPLOYEE', 'PATRON').required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
            password: Joi.string()
        })
    },
    book: {
        create: Joi.object({
            barcode: Joi.string().regex(/^\d{10,13}$/).required(),
            cover: Joi.string().required(),
            title: Joi.string().required(),
            authors: Joi.array().items(Joi.string()).required(),
            description: Joi.string().required(),
            subjects: Joi.array().items(Joi.string()).required(),
            publicationDate: Joi.date().required(),
            publisher: Joi.string().required(),
            pages: Joi.number().integer().required(),
            genre: Joi.string().required()
        }),
        update: Joi.object({
            _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            barcode: Joi.string().regex(/^\d{10,13}$/).required(),
            cover: Joi.string().required(),
            title: Joi.string().required(),
            authors: Joi.array().items(Joi.string()).required(),
            description: Joi.string().required(),
            subjects: Joi.array().items(Joi.string()).required(),
            publicationDate: Joi.date().required(),
            publisher: Joi.string().required(),
            pages: Joi.number().integer().required(),
            genre: Joi.string().required()
        }),
        delete: Joi.object({
            barcode: Joi.string().regex(/^\d{10,13}$/).required()
        })
    },
    libraryCard: {
        create: Joi.object({
            user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),
        get: Joi.object({
            cardId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    },
    loan: {
        create: Joi.object({
            status: Joi.string().valid('AVAILABLE', 'LOANED').required(),
            loanedDate: Joi.date().required(),
            dueDate: Joi.date().required(),
            returnedDate: Joi.date(),
            patron: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            employeeOut: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            employeeIn: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
            item: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
    
        update: Joi.object({
            _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            status: Joi.string().valid('AVAILABLE', 'LOANED').required(),
            loanedDate: Joi.date().required(),
            dueDate: Joi.date().required(),
            returnedDate: Joi.date(),
            patron: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            employeeOut: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            employeeIn: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
            item: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
    
        query: Joi.object({
            property: Joi.string().valid('_id', 'status', 'loanedDate', 'dueDate', 'returnedDate', 'patron', 'employeeOut', 'employeeIn', 'item').required(),
            value: Joi.alternatives().try(Joi.string(), Joi.date()).required()
        })
    }
    
};

export default { Schemas, validateSchema };
