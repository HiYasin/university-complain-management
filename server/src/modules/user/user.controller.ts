
import { Request, Response } from 'express';
import express from 'express';
import { User } from './user.model';


export const userRouter = express.Router();

// Create user
userRouter.post('/', async (req: Request, res: Response, next) => {
	const userData = new User(req.body);
	try {
		const savedUser = await userData.save();
		res.status(201).json({
			success: true,
			message: 'User created successfully',
			data: savedUser
		});
	} catch (error) {
		next(error);
	}
});

// Get user by matricId
userRouter.get('/:matricId', async (req: Request, res: Response, next) => {
	try {
		const userData = await User.findOne({ matricId: req.params.matricId });
		if (!userData) {
			return res.status(404).json({
				success: false,
				message: 'User not found',
				data: null
			});
		}
		res.status(200).json({
			success: true,
			message: 'User retrieved successfully',
			data: userData
		});
	} catch (error) {
		next(error);
	}
});
