import mongoose from 'mongoose';
import { logger } from './logs.config.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
	logger.info('Connected to Mongo ✨');
	logger.info(`----------------------------------------------`);
});

export default mongoose;
