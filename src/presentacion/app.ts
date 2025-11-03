import Fastify from 'fastify';


import cors from '@fastify/cors';
<<<<<<< HEAD

import { citasMedicasEnrutador } from './rutas/citasMedicasEnrutador.js';
=======
import { pacienteEnrutador } from './rutas/pacienteEnrutador.js';
import { consultorioEnrutador } from './rutas/consultorioEnrutador.js';
>>>>>>> developer


const app = Fastify({ logger: true });

app.register(cors);
<<<<<<< HEAD
app.register(citasMedicasEnrutador, { prefix: "/api/citas-medicas" });
=======
app.register(pacienteEnrutador, { prefix: '/api' });
app.register(consultorioEnrutador, { prefix: '/consultorios' });
>>>>>>> developer

app.get('/', async () => {
    return { mensaje: 'Servidor Fastify funcionando' };
});

export default app;