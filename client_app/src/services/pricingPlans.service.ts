import { IPricingPlan } from "../types";

export const getServicePlans = async (ipAddress: string | undefined, discount: boolean): Promise<IPricingPlan[]> => {
  const params: Record<string, string> = { ipAddress: ipAddress || '' };

  if (discount) {
    params.discount = 'true';
  }
  const result = await fetch('http://localhost:4040/v1/pricing-plans?' + new URLSearchParams(params));
  return await result.json();
}