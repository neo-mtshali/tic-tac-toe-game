import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 52px);
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  padding-bottom: 2rem; // Add some padding at the bottom

`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.buttonTextColor};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.buttonHoverColor};
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 1rem;
  svg {
    width: 100px;
    height: 100px;
    fill: ${props => props.theme.textColor};
  }
`;