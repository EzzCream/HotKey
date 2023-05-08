import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
	{
		userID: {
			type: String,
			required: true,
		},
		products: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export const CartModels = mongoose.model('cart', Schema);
