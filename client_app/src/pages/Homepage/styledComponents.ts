import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const ButtonsContainer = styled.div`
  padding-left: 12px;
  padding-top: 12px;
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  outline: none;
  padding: 3px 6px;
  border: 1px solid rgba(0,0,0,0.3);
  cursor: pointer;
  border-radius: 4px;

  &.selected {
    background-color: antiquewhite;
  }
`