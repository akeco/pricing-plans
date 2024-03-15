import { IPricingPlan } from '../../types';
import { calculatePercentage } from '../../utils/calculatePercentage';
import { Card, Discount, DiscountPrice } from '../styledComponents';

type PricingCardProps = {
  plan: IPricingPlan
}

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card>
      { plan.discount && <Discount title={plan.discountName || ''}><h4>{ plan.discount }%</h4></Discount> }
      <h1 style={{ textDecoration: plan.discount ? 'line-through' : 'none' }}>{ USDollar.format(plan.price) }</h1>
      { plan.discount && <DiscountPrice>{ USDollar.format(calculatePercentage(plan.price, plan.discount)) }</DiscountPrice> }
      <h2>{ plan.name }</h2>
      <p>{ plan.description }</p>
    </Card>
  )
}