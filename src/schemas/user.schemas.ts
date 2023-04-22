import { hashSync } from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email().max(100),
    password: z.string().max(120).transform((password) => hashSync(password, 10)),
    admin: z.boolean().optional().default(false)
})

const updateUserSchema = z.object({
    name: z.string().min(3).max(20).optional(),
    email: z.string().email().max(100).optional(),
    password: z.string().max(120).transform((password) => hashSync(password, 10)).optional()
})

const returnUserSchema = userSchema.extend({
    id: z.number(),
    active: z.boolean()
}).omit({password: true})

export {
    userSchema,
    updateUserSchema,
    returnUserSchema
}