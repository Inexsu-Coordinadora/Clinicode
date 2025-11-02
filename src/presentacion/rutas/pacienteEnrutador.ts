import { crearPacienteControlador, listarPacienesControlador, obtenerPacientePorIdControlador } from "../controladores/pacienteControlador.js";
import { FastifyInstance } from "fastify";

export async function pacienteEnrutador(app: FastifyInstance) {
    app.get('/pacientes',listarPacienesControlador);
    app.get('/pacientes/:idPaciente',obtenerPacientePorIdControlador);
    app.post('/pacientes', crearPacienteControlador);
};