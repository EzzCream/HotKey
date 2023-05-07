import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		lastname: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		direction: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		number: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	},
);

export const UserModel = mongoose.model('user', Schema);
