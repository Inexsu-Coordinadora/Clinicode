import { crearPacienteControlador, listarPacienesControlador, obtenerPacientePorIdControlador } from "../controladores/pacienteControlador.js";
import { actualizarPacienteControlador } from "../controladores/pacienteControlador.js";
import { FastifyInstance } from "fastify";

export async function pacienteEnrutador(app: FastifyInstance) {
    app.get('/pacientes',listarPacienesControlador);
    app.get('/pacientes/:idPaciente',obtenerPacientePorIdControlador);
    app.post('/pacientes', crearPacienteControlador);
    app.put('/pacientes/:idPaciente',actualizarPacienteControlador);
};