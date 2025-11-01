import { crearConsultorioControlador, listarConsultoriosControlador } from '../controladores/consultorioControlador.js';
import { FastifyInstance } from 'fastify';


export async function consultorioEnrutador(app: FastifyInstance) {
    app.post('/', crearConsultorioControlador);
    app.get('/', listarConsultoriosControlador);
}