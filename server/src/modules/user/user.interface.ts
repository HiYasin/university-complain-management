export interface IUser {
    matricId: string;
    email: string;
    name: string;
    photoUrl?: string;
    role: 'user' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}