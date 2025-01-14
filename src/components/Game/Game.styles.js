import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 52px); // Subtract the height of the header
  padding-bottom: 2rem; // Add some padding at the bottom
`;