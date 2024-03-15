import { useState } from 'react';
import { PricingCard } from "../../components/PricingCard/PricingCard";
import { useGetPricingPlans } from '../../hooks/useGetPricingPlans';
import { IP_ADDRESS } from '../../constants';
import { Container, Button, ButtonsContainer } from './styledComponents';

const Homepage = () => {
  const [selectedRegionIP, setSelectedRegionIP] = useState<string>();
  const [isDiscountSelected, setIsDiscountSelected] = useState<boolean>(false);

  const { data: pricingPlans } = useGetPricingPlans(selectedRegionIP, isDiscountSelected);

  const onToggleDiscount = () => setIsDiscountSelected(isDiscountSelected => !isDiscountSelected);

  return (
    <div>
      <ButtonsContainer>
        <Button 
          className={!selectedRegionIP ? 'selected' : '' } 
          onClick={() => setSelectedRegionIP(undefined)}
        >
          Global
        </Button>
        <Button 
          className={selectedRegionIP === IP_ADDRESS.us_tx ? 'selected' : '' } 
          onClick={() => setSelectedRegionIP(IP_ADDRESS.us_tx)}
        >
          US / TX
        </Button>
        <Button 
          className={selectedRegionIP === IP_ADDRESS.nl ? 'selected' : '' } 
          onClick={() => setSelectedRegionIP(IP_ADDRESS.nl)}
        >
          EU / NL
        </Button>
        <Button 
          className={isDiscountSelected ? 'selected' : '' } 
          onClick={onToggleDiscount}
        >
          Discount plans
        </Button>
      </ButtonsContainer>
      <Container>
        {
          pricingPlans.map(item => (
            <PricingCard key={item.id} plan={item} />
          ))
        }
      </Container>
    </div>
  )
}

export default Homepage;