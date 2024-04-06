import express, { Express } from 'express';
import userRoutes from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';
import path from "path";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;


app.use(express.json());
app.use('/users', userRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// app.get('/', (req, res) => {
//     res.send(":)");
// })
// app.get('/a', (req, res) => {
//     throw new Error("dsadsa");
// })

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
