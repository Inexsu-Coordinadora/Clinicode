import Fastify from 'fastify';

import { consultorioEnrutador } from './consultorioEnrutador.js';
import cors from '@fastify/cors';


const app = Fastify({ logger: true });

app.register(cors);
app.register(consultorioEnrutador, { prefix: '/api/consultorios' });

app.get('/', async () => {
    return { mensaje: 'Servidor Fastify funcionando' };
});

export default app;
