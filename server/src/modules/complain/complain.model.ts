
import { Schema, model } from 'mongoose';
import { IComplain } from './complain.interface';

const ComplainSchema = new Schema<IComplain>({
	userMatricId: { type: String, required: true },
	subject: { type: String, required: true },
	description: { type: String, required: true },
	status: { type: String, enum: ['pending', 'approved', 'resolved', 'rejected'], default: 'pending', required: true },
}, {
	timestamps: true,
});

export const Complain = model<IComplain>('Complain', ComplainSchema);
