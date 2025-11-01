
import { Consultorio } from "../../dominio/entidades/consultorios/IConsultorio.js";
import { IConsultorioRepositorio } from "../../dominio/repository/IConsultorioRepositorio.js";
import { supabase } from "../cliente-db/clienteSupabase.js";


export class ConsultorioRepositorioSupabase implements IConsultorioRepositorio {
    async crear(consultorio: Consultorio): Promise<void> {
        const { error } = await supabase.from('consultorios').insert([consultorio]);
        if (error) throw new Error(error.message);
    }

    async listar(): Promise<Consultorio[]> {
        const { data, error } = await supabase.from('consultorios').select('*');
        if (error) throw new Error(error.message);
        return data as Consultorio[];
    }
}