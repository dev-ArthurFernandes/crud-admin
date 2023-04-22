import { object, z } from 'zod';


const loginSchem = z.object({
    email: z.string().email(),
    password: z.string()
})

export default loginSchem