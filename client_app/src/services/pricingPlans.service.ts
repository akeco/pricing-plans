import { IPricingPlan } from "../types";

const API_DOMAIN = process.env.REACT_APP_API;

export const getServicePlans = async (ipAddress: string | undefined, discount: boolean): Promise<IPricingPlan[]> => {
  const params: Record<string, string> = { ipAddress: ipAddress || '' };

  if (discount) {
    params.discount = 'true';
  }

  const result = await fetch(`${API_DOMAIN}/v1/pricing-plans?` + new URLSearchParams(params));
  return await result.json();
}