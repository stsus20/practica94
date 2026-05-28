import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});