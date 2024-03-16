import httpStatus from 'http-status';
import { lookup } from 'geoip-lite';
import catchAsync from '../utils/catchAsync';
import { pricingPlan } from '../services';

const getPricingPlans = catchAsync(async (req, res) => {
  const { ipAddress, discount } = req.query;
  const geoResult = lookup(ipAddress as string);

  let countryData = '';
  let regionData = '';
  if (geoResult) {
    let { country, region } = geoResult;
    countryData = country;
    regionData = region;
  }

  const pricingPlans = await pricingPlan.getServicePlans(countryData, regionData, !!discount);
  res.status(httpStatus.OK).send(pricingPlans);
});


export default {
  getPricingPlans
};
