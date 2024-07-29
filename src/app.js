import express from 'express';
import usuarioRoute from './routes/usuarios.js';
import platosRoute from './routes/platos.js';
import ordenesRoute from './routes/ordenes.js';

const app = express();

app.use(express.json());

// rutas
app.use(usuarioRoute);
app.use(platosRoute);
app.use(ordenesRoute);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});