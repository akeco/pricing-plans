import express from 'express';
import Controller from '../../controllers/pricingPlan.controller'
import { checkOriginOrApiKey } from '../../middlewares/checkOriginOrApiKey';

const router = express.Router();

router.get('/', checkOriginOrApiKey, Controller.getPricingPlans);

export default router;