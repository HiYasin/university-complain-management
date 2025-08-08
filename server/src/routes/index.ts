
import express from 'express';
import { userRouter } from '../modules/user/user.controller';
import { complainRouter } from '../modules/complain/complain.controller';

const routes = express.Router();

routes.use('/user', userRouter);
routes.use('/complain', complainRouter);

export default routes;
