import { FastifyRequest, FastifyReply } from "fastify";
import { IPaciente } from "../../core/dominio/entidades/pacientes/Ipaciente.js";
import { CrearPaciente } from "../../core/aplicacion/pacienteCasoUso/CrearPaciente.js";
import { PacienteDTO, CrearPacienteEsquema } from "../esquemas/PacienteEsquema.js";
import { PacienteRepositorioSupaBase } from "../../core/infraestructura/repositorios/pacienteRepositorioSupaBase.js";
import { ZodError } from "zod";


export async function crearPacienteControlador(req: FastifyRequest<{Body: PacienteDTO}>,
     reply: FastifyReply) {
  try {
    const datosPaciente = CrearPacienteEsquema.parse(req.body);
    const repo = new PacienteRepositorioSupaBase();
    const crearPacienteCaso = new CrearPaciente(repo);
    const idNuevoPaciente = await crearPacienteCaso.ejecutar(datosPaciente);
    
    return reply.code(201).send({
        mensaje: "Paciente creado correctamente",
        idPaciente: idNuevoPaciente
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return reply.code(400).send({
        mensaje: "Datos inválidos",
        error: err.issues[0]?.message || "Error desconocido",
      });
    }

    return reply.code(500).send({
      mensaje: "Error al crear el paciente",
      error: err instanceof Error ? err.message : String(err),
    });
  }
};