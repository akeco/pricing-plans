export interface IPricingPlan {
  id: number,
  name: string,
  description: string | null,
  price: number,
  discount: number | null,
  discountName: string | null,
  specialOffer: string | null,
  validityPeriod: string | null,
  createdAt: string,
  updatedAt: string,
  regionId: 5
}