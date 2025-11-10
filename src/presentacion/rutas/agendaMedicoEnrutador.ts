import { crearAgendaMedicoControlador, listarAgendaMedicoControlador } from "../controladores/agendaMedicoControlador.js";
import { obtenerAgendaPorIdControlador, actualizarAgendaMedicoControlador } from "../controladores/agendaMedicoControlador.js";
import { eliminarAgendaControlador } from "../controladores/agendaMedicoControlador.js";
import { FastifyInstance } from "fastify";

export async function agendaMedicoEnrutador (app: FastifyInstance){
    app.get('/agendas-medico',listarAgendaMedicoControlador);
    app.get('/agendas-medico/:idMedico',obtenerAgendaPorIdControlador);
    app.post('/agendas-medico', crearAgendaMedicoControlador);
    app.put('/agendas-medico/:idMedico',actualizarAgendaMedicoControlador);
    app.delete('/agendas-medico/:idMedico',eliminarAgendaControlador);
};

