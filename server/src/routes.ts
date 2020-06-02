import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsControler = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsControler.index);
routes.post('/points', pointsControler.create);
routes.get('/points/:id', pointsControler.show);

export default routes;