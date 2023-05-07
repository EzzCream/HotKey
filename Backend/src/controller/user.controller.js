import { logger } from '../config/logs.config.js';
import { UserModel } from '../model/user.model.js';
import { directionServer } from '../util/global.js';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

export async function signup(req, res) {
	try {
		const user = req.body;
		const email = user.email;
		const userExist = await UserModel.findOne({ email });
		if (userExist) {
			res.status(406).send('User exist');
		} else {
			const newUser = {
				...user,
				img: directionServer + '/default.jpeg',
				password: bcrypt.hashSync(
					user.password,
					bcrypt.genSaltSync(10),
					null,
				),
			};
			await UserModel.create(newUser);
			res.status(201).send('User Created');
		}
	} catch (error) {
		logger.error(error);
	}
}

export async function login(req, res) {
	try {
		const userIn = req.body;
		const email = userIn.email;
		const user = await UserModel.findOne({ email });
		if (user) {
			const isValid = bcrypt.compareSync(userIn.password, user.password);
			if (isValid) {
				jwt.sign({ user }, 'secretKey', (err, token) => {
					res.status(202).json({
						token,
						user,
					});
				});
			} else {
				res.status(404).send('Error password');
			}
		} else {
			res.status(404).send('Error email');
		}
	} catch (error) {
		logger.error(error);
	}
}
