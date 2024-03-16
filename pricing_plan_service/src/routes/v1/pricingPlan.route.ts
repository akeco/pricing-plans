import express from 'express';
import Controller from '../../controllers/pricingPlan.controller'
import { checkOrigin } from '../../middlewares/checkOrigin';
import { validateApiKey } from '../../middlewares/validateApiKey';

const router = express.Router();

router.get('/', checkOrigin, Controller.getPricingPlans);

router.get('/shared', validateApiKey, Controller.getPricingPlans);

export default router;