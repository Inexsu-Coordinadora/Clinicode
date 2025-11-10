import { IAgendaMedico } from "../../dominio/entidades/agendaMedico/IAgendaMedico.js";
import { IAgendaMedicoRepositorio } from "../../dominio/repository/IAgendaMedicoRepositorio.js";
import { supabase } from "../cliente-db/clienteSupaBase.js";
import { AgendaMedicoDTO } from "../esquemas/AgendaMedicoEsquema.js";
import { v4 as uuidv4 } from "uuid";

export class AgendaMedicoRepositorioSupaBase implements IAgendaMedicoRepositorio {
    
    async crearAgenda(datosAgenda: AgendaMedicoDTO): Promise<string> {
        const { data: medico, error: errorMedico } = await supabase
        .from('medicos')
        .select('id_medico')
        .eq('id_medico', datosAgenda.idMedico)
        .single();
        
        if (!medico || errorMedico) {
            throw new Error("El médico especificado no existe");
        }
        
        const { data: consultorio, error: errorConsultorio } = await supabase
        .from('consultorios')
        .select('id_consultorio')
        .eq('id_consultorio', datosAgenda.idConsultorio)
        .single();
        
        if (!consultorio || errorConsultorio) {
            throw new Error("El consultorio especificado no existe");
        }
        
        const { data: asignacionExistente, error: errorAsignacion } = await supabase
        .from("agenda_medico")
        .select("id_agenda")
        .eq("id_medico", datosAgenda.idMedico)
        .eq("id_consultorio", datosAgenda.idConsultorio)
        .eq("hora_inicio", datosAgenda.horaInicio)
        .eq("hora_fin", datosAgenda.horaFin);
        
        if (errorAsignacion) {
            throw new Error("Error al verificar asignaciones existentes");
        }
        
        if (asignacionExistente && asignacionExistente.length > 0) {
            throw new Error("Ya existe una asignación idéntica para este médico, consultorio y horario");
        }
        
        const { data, error } = await supabase
        .from("agenda_medico")
        .insert({
            id_agenda: uuidv4(),
            id_medico: datosAgenda.idMedico,
            id_consultorio: datosAgenda.idConsultorio,
            dias_disponibles: datosAgenda.diasDisponibles,
            hora_inicio: datosAgenda.horaInicio,
            hora_fin: datosAgenda.horaFin,
            creada_en: new Date().toISOString()
        })
        .select("id_agenda")
        .single();
        
        if (error) {
            throw new Error(`Error al crear la agenda: ${error.message}`);
        }
        
        return data.id_agenda;
    }

    async listarAgendas(limite?:number): Promise<IAgendaMedico[]> {
        
        let query = supabase.from('agenda_medico').select('*');
        
        if (limite) {
            query = query.limit(limite);
        };
        
        const { data, error } = await query;
        
        if (error) throw new Error(error.message);
        
        return data as IAgendaMedico[];
    }
    
    async obtenerAgendaPorId(idAgenda: string): Promise<IAgendaMedico | null> {
        const {data, error} = await supabase
        .from('agenda_medico').select('*').eq('id_agenda', idAgenda).single();
        
        if (error){
            throw new Error("Error al obtener la agenda del médico" + error.message)
        }
        return data;
    }

    async actualizarAgenda(idAgenda: string, datosAgenda: IAgendaMedico): 
    Promise<IAgendaMedico | null> {
        
        const { data, error } = await supabase
        .from('agenda_medico')
        .update({
            id_medico: datosAgenda.idMedico,
            id_consultorio: datosAgenda.idConsultorio,
            dias_disponibles: datosAgenda.diasDisponibles,
            hora_inicio: datosAgenda.horaInicio,
            hora_fin: datosAgenda.horaFin,
            creada_en: new Date().toISOString(),
        })
        .eq("id_agenda", idAgenda) 
        .select("*") 
        .single();
        
        if (error) {
            throw new Error("Error al actualizar la agenda: " + error.message);
        }
        
        return data as IAgendaMedico;
    }

    async eliminarAgenda(idAgenda: string): Promise<void> {
        const { error } = await supabase
        .from('agenda_medico')
        .delete()
        .eq('id_agenda', idAgenda);
        
        if (error) {
            throw new Error("Error al eliminar la agenda: " + error.message);
        }
    }
};
