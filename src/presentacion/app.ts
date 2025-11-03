import Fastify from 'fastify';
import cors from '@fastify/cors';
import { pacienteEnrutador } from './rutas/pacienteEnrutador.js';
import { consultorioEnrutador } from './rutas/consultorioEnrutador.js';
import { medicosEnrutador } from './rutas/medicoEnrutador.js';


const app = Fastify({ logger: true });

app.register(cors);
app.register(pacienteEnrutador, { prefix: '/api' });
app.register(consultorioEnrutador, { prefix: '/consultorios' });
app.register(medicosEnrutador, { prefix: '/api/medicos' })

app.get('/', async () => {
    return { mensaje: 'Servidor Fastify funcionando' };
});

export default app;
