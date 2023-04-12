import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { logger } from './config/logs.config.js';
import './config/db.config.js';
import Products from './route/product.route.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/product', Products);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
	logger.info(`----------------------------------------------`);
	logger.info(`Server started on http://localhost:${PORT} ✨`);
	logger.info(`----------------------------------------------`);
});
server.on('error', (err) => logger.error(err));
