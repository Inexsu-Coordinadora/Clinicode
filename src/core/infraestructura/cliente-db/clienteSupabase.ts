import { createClient } from '@supabase/supabase-js';
<<<<<<< HEAD
import dotenv from 'dotenv';

dotenv.config();

export const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
=======
import { configuracion } from '../../../common/configuracion.js';

const { supabaseUrl, supabaseKey } = configuracion;

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
>>>>>>> developer
);