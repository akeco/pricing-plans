import prisma from '../client';

type WhereType = { 
  region?: { 
    country?: string , 
    region?: string | null,
  },
  discount?: any
}

const getServicePlans = async (country: string | null, region: string | null, discount: boolean = false) => {
  let whereClause: WhereType = {};

  if (country !== null && country !== '') {
    whereClause = {
      region: { country }
    };
    if (!discount) {
      whereClause.discount = {
        equals: null
      }
    }
  }

  if (region !== null && region !== '') {
    whereClause = {
      region: { region }
    };
    if (!discount) {
      whereClause.discount = {
        equals: null
      }
    }
  } else {
    whereClause = {
      region: { region: null }
    };
    if (!discount) {
      whereClause.discount = {
        equals: null
      }
    }
  }

  let result = await prisma.pricingPlan.findMany({ where: whereClause, orderBy: { price: 'asc' } });

  if (!result.length && region && country) {
    result = await prisma.pricingPlan.findMany({ where: { region: { country } }, orderBy: { price: 'asc' } });
  }

  return result;
};

export default {
  getServicePlans
}