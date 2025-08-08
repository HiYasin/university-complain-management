

import { Request, Response } from 'express';
import express from 'express';
import { Complain } from './complain.model';

export const complainRouter = express.Router();

// Create complain
complainRouter.post('/', async (req: Request, res: Response, next) => {
	try {
		const complain = await Complain.create(req.body);
		res.status(201).json({
			success: true,
			message: 'Complain created successfully',
			data: complain
		});
	} catch (error) {
		next(error);
	}
});

// Get complain by _id
complainRouter.get('/:_id', async (req: Request, res: Response, next) => {
	try {
		const complain = await Complain.findById(req.params._id);
		if (!complain) {
			return res.status(404).json({
				success: false,
				message: 'Complain not found',
				data: null
			});
		}
		res.status(200).json({
			success: true,
			message: 'Complain retrieved successfully',
			data: complain
		});
	} catch (error) {
		next(error);
	}
});

// Get complain by userMatricId
complainRouter.get('/user/:userMatricId', async (req: Request, res: Response, next) => {
	try {
		const complains = await Complain.find({ userMatricId: req.params.userMatricId });
		res.status(200).json({
			success: true,
			message: 'Complains retrieved successfully',
			data: complains
		});
	} catch (error) {
		next(error);
	}
});

// Get all complains
complainRouter.get('/', async (req: Request, res: Response, next) => {
	try {
		const complains = await Complain.find();
		res.status(200).json({
			success: true,
			message: 'All complains retrieved successfully',
			data: complains
		});
	} catch (error) {
		next(error);
	}
});

// Update complain
complainRouter.put('/:_id', async (req: Request, res: Response, next) => {
	try {
		const updatedComplain = await Complain.findByIdAndUpdate(req.params._id, req.body, { new: true,  runValidators: true });
		if (!updatedComplain) {
			return res.status(404).json({
				success: false,
				message: 'Complain not found',
				data: null
			});
		}
		res.status(200).json({
			success: true,
			message: 'Complain updated successfully',
			data: updatedComplain
		});
	} catch (error) {
		next(error);
	}
});

// Delete complain
complainRouter.delete('/:_id', async (req: Request, res: Response, next) => {
	try {
		const deletedComplain = await Complain.findByIdAndDelete(req.params._id);
		if (!deletedComplain) {
			return res.status(404).json({
				success: false,
				message: 'Complain not found',
				data: null
			});
		}
		res.status(200).json({
			success: true,
			message: 'Complain deleted successfully',
			data: deletedComplain
		});
	} catch (error) {
		next(error);
	}
});