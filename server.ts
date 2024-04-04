import express, { Express } from 'express';
import userRoutes from './src/routes/userRoutes';
import errorHandler from './src/middlewares/errorHandler';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.send(":)");
})
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
