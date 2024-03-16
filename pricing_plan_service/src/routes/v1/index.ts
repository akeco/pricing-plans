import express from 'express';
import pricingPlanRoute from './pricingPlan.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/pricing-plans',
    route: pricingPlanRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
