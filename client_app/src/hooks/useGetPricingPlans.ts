import { useEffect, useState } from "react";
import { getServicePlans } from '../services/pricingPlans.service';
import { IPricingPlan } from "../types";

export const useGetPricingPlans = (ipAddress: string | undefined, discount: boolean) => {
  const [data, setData] = useState<IPricingPlan[]>([]);
  const [error, setError] = useState<Error>();
 
  useEffect(() => {
    (async () => {
      try {
        const result = await getServicePlans(ipAddress, discount);
        setData(result);
      }
      catch (err: any) {
        setError(err);
      }
    })();
  }, [ipAddress, discount]);

  return { data, error };
}