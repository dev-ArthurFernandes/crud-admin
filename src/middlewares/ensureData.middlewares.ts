import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";


const ensureData = (schema: ZodSchema) => (req:Request, res: Response, next: NextFunction): Response | void => {
    
    const validateData = schema.parse(req.body)

    req.body = validateData

    return next()
}

export default ensureData