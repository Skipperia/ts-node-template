import express, { Express } from 'express';
import userRoutes from './app/routes/userRoutes';
import errorHandler from './app/middlewares/errorHandler';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.get('/', (req, res) => {
    throw new Error("dsads");
})
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
