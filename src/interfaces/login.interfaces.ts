import { z } from 'zod';
import { loginSchem } from '../schemas';

type ILogin = z.infer<typeof loginSchem>

export default ILogin