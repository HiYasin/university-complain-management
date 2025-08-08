export interface IComplain {
	userMatricId: string;
	subject: string;
	description: string;
	status: 'pending' | 'approved' | 'resolved' | 'rejected';
	createdAt: Date;
	updatedAt: Date;
}
