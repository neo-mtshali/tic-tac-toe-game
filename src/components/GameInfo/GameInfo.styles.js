import styled from 'styled-components';

export const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 300px; // Set a fixed width (same as the board)
  padding: 0 20px; 
  box-sizing: border-box; 
`;

export const Score = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${props => props.theme.textColor};
  width: 100%; 
  text-align: center;
`;

export const Status = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${props => props.theme.textColor};
  width: 100%; 
  text-align: center; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%; 
  justify-content: center; 
`;

// Add this new style for the Reset Button
export const ResetButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.buttonTextColor};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.buttonHoverColor};
  }
`;