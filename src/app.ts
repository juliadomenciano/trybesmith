import 'express-async-errors';
import express from 'express';
import error from './middlewares/error';
import authRouter from './routes/authRouter';
import orderRouter from './routes/orderRouter';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/login', authRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

app.use(error);

export default app;
