import { crearPacienteControlador, listarPacienesControlador } from "../controladores/pacienteControlador.js";
import { FastifyInstance } from "fastify";

export async function pacienteEnrutador(app: FastifyInstance) {
    app.get('/pacientes',listarPacienesControlador);
    app.post('/pacientes', crearPacienteControlador);
};