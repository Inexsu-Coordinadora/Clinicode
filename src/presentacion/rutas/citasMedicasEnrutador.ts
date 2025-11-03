import {
    crearCitaMedicaControlador,
    listarCitasMedicasControlador,
    obtenerCitaMedicaPorIdControlador,
    actualizarCitaMedicaControlador,
    eliminarCitaMedicaControlador,
} from "../controladores/citasMedicasControlador.js";

import { FastifyInstance } from "fastify";


export async function citasMedicasEnrutador(app: FastifyInstance) {

    app.post("/", crearCitaMedicaControlador);
    app.get("/", listarCitasMedicasControlador);
    app.get("/:idCita", obtenerCitaMedicaPorIdControlador);
    app.put("/:idCita", actualizarCitaMedicaControlador);
    app.delete("/:idCita", eliminarCitaMedicaControlador);
}
