import { crearPacienteControlador } from "../controladores/pacienteControlador.js";
import { FastifyInstance } from "fastify";

export async function pacienteEnrutador(app: FastifyInstance) {
    app.post('/', crearPacienteControlador);
}