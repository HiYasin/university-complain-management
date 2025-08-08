import express from 'express';
import cors from 'cors';
import routes from './routes';
import { unknownRouteHandler } from './middlewares/unknownRoute.handler';
import { globalErrorHandler } from './middlewares/globalError.handler';

const app = express();

const middleware = [
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
];
app.use(middleware);

// Routes
app.use('/api/v1', routes);

// Initial Route
app.get('/', (req, res) => {
  //   throw new Error("Server is Crashed 😵‍💫");

  res.send({ success: true, message: `Sever is Live ⚡` });
});

// 404 Not Found handler (must be after all routes)
app.use(unknownRouteHandler);

// Global Error handler (must be last)
app.use(globalErrorHandler);

export default app;
