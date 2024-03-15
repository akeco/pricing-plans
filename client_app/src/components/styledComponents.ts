import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 500px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.1);
  padding: 25px;

  h2 {
    text-transform: capitalize;
  }
  p {
    text-align: center;
  }
`;

export const Discount = styled.div`
  position: absolute;
  right: -20px;
  top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: red;
  color: white;
  border-radius: 50%;
  cursor: default;
`
export const DiscountPrice = styled.h1`
  margin: 0;
  color: red;
`