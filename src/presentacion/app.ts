import Fastify from 'fastify';


import cors from '@fastify/cors';
import { consultorioEnrutador } from './rutas/consultorioEnrutador.js';


const app = Fastify({ logger: true });

app.register(cors);
app.register(consultorioEnrutador, { prefix: '/consultorios' });

app.get('/', async () => {
    return { mensaje: 'Servidor Fastify funcionando' };
});

export default app;
