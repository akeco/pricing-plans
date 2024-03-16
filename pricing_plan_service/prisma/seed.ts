import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const plans = ['starter', 'basic', 'premium']

const main = async () => {
  try{
    await prisma.region.deleteMany();
    // cleanup the existing database

    await prisma.region.createMany({
      data: [{
        region: 'FL',
        country: 'US'
      }, {
        region: 'NY',
        country: 'US'
      }, {
        region: 'TX',
        country: 'US'
      }, {
        country: 'US'
      }, {
        country: 'NL'
      }]
    });

    const regions = await prisma.region.findMany();


    await prisma.pricingPlan.createMany({
      data: [...new Array(10)].map(() => ({
        name: plans[Math.floor(Math.random()*plans.length)],
        price: Number(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        regionId: regions[Math.floor(Math.random()*regions.length)].id,
      }))
    })

    console.log(`Database has been seeded. 🌱`);
  }
  catch(error){
    throw error;
  }
}

main().catch((err) => {
  console.warn("Error While generating Seed: \n", err);
});