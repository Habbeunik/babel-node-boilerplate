import { Router } from 'express';
import product from './routes/product';

const api = Router();

api.use(function (req, res, next) {
	console.log('clled api route');

	next();
});

api.use('/product', product);

export default api;
