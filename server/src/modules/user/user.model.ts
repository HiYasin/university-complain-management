
import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const UserSchema = new Schema<IUser>({
    matricId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    photoUrl: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
}, {
    timestamps: true,
});

export const User = model<IUser>('User', UserSchema);
// export const User = model('User', UserSchema);
