import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// Routes
// Import and use your routes here, for example:
// import authRoutes from './routes/authRoutes';
// app.use('/api/auth', authRoutes);

export default app;
