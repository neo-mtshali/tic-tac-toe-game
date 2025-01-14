import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  margin: 20px auto;
`;

export const Square = styled.button`
  background-color: ${props => props.theme.squareColor};
  border: none;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.textColor};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; // Remove padding if present

  &:hover {
    background-color: ${props => (!props.disabled ? props.theme.squareHoverColor : props.theme.squareColor)};
  }

  svg {
    width: 80%;
    height: 80%;
    fill: ${props => props.theme.textColor}; 
  }
`;