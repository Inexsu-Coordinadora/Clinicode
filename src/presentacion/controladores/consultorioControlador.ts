
import { CrearConsultorio } from "../../core/aplicacion/casoUsoConsultorio/crearConsultorio.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { ConsultorioRepositorioSupabase } from "../../core/infraestructura/repositorios/pacienteRepositorioSupabase.js";
import { ListarConsultorios } from "../../core/aplicacion/casoUsoConsultorio/listarConsultorios.js";


const repo = new ConsultorioRepositorioSupabase();
const crearConsultorioCaso = new CrearConsultorio(repo);
const listarConsultoriosCaso = new ListarConsultorios(repo);

export async function crearConsultorioControlador(req: FastifyRequest, reply: FastifyReply) {
    try {
        const consultorio = req.body as any;
        await crearConsultorioCaso.ejecutar(consultorio);
        reply.status(201).send({ mensaje: 'Consultorio creado correctamente' });
    } catch (error: any) {
        reply.status(400).send({ error: error.message });
    }
}

export async function listarConsultoriosControlador(req: FastifyRequest, reply: FastifyReply) {
    try {
        const consultorios = await listarConsultoriosCaso.ejecutar();
        reply.send(consultorios);
    } catch (error: any) {
        reply.status(500).send({ error: error.message });
    }
}