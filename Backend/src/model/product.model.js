import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		category: {
			type: String,
			require: true,
		},
		brand: {
			type: String,
			require: true,
		},
		img: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},
		stock: {
			type: Array,
			require: true,
		},
		rating: {
			type: Number,
			require: true,
		},
	},
	{
		timestamps: true,
	},
);

export const ProductModel = mongoose.model('product', Schema);
