import { IPacienteRepositorio } from "../../dominio/repository/IPacienteRepositorio.js";
import { IPaciente } from "../../dominio/entidades/pacientes/Ipaciente.js";
import { supabase } from "../cliente-db/clienteSupaBase.js";
import { Paciente } from "../../dominio/entidades/pacientes/Paciente.js";
import { PacienteDTO } from "../../../presentacion/esquemas/PacienteEsquema.js";
import { v4 as uuidv4 } from "uuid";


export class PacienteRepositorioSupaBase implements IPacienteRepositorio {
    
    async crearPaciente(datosPaciente: PacienteDTO): Promise<string> {
        const { data, error } = await supabase
        .from('pacientes')
        .insert([{
            id_paciente: uuidv4(),
            tipo_documento: datosPaciente.tipoDocumento,
            numero_documento: datosPaciente.numeroDocumento,
            nombres: datosPaciente.nombres,
            apellidos: datosPaciente.apellidos,
            fecha_nacimiento: datosPaciente.fechaNacimiento, // 👈 aquí el cambio clave
            telefono: datosPaciente.telefono,
            correo: datosPaciente.correo,
            direccion: datosPaciente.direccion
        }])
        .select("id_paciente")
        .single();

    if (error) {
        throw new Error("Error al crear paciente: " + error.message);
    }
    return data.id_paciente;
    }

    async listarPacientes(limite?: number): Promise<IPaciente[]> {
        let query = supabase.from('pacientes').select('*');
        
        if (limite) {
            query = query.limit(limite);
        }
        
        const { data, error } = await query;
        
        if (error) throw new Error(error.message);
        
        return data as IPaciente[];
    }

    async obtenerPacientePorId(idPaciente: string): Promise<IPaciente | null> {
        return null
    }

    async actualizarPaciente(idPaciente: string, datosPaciente: IPaciente): Promise<IPaciente> {
        return datosPaciente
    }

    async eliminarPaciente(idPaciente: string): Promise<void> {
        
    }
}