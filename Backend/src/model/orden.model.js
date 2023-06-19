import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
	{
		userID: {
			type: String,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		direction: {
			type: String,
			require: true,
		},
		products: {
			type: Array,
			require: true,
		},
		total: {
			type: Number,
			require: true,
		},
	},
	{
		timestamps: true,
	},
);

export const OrdenModel = mongoose.model('orden', Schema);
