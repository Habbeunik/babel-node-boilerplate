import { Router } from 'express';
import controller from '../controllers/product';

const router = Router();

router
	.use('/', function (req, res, next) {
		next();
	})
	.get('/', controller.getProducts)
	.post('/', controller.saveProduct);

export default router;
