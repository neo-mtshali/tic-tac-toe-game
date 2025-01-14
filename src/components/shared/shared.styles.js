import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${props => props.theme.headerBackgroundColor};
    color: ${props => props.theme.headerTextColor};
`;

export const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
    flex: 2;
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex; // Use flexbox to center the icon
    align-items: center; // Vertically center
    justify-content: center; // Horizontally center
    width: 36px; // Set a fixed width
    height: 36px; // Set a fixed height
    border-radius: 50%; // Make it circular

    &:hover {
        background-color: ${props => props.theme.buttonHoverColor};
    }

    svg {
        width: 24px;
        height: 24px;
        fill: ${props => props.theme.headerTextColor};
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    width: 36px; // Same as BackButton width
    justify-content: flex-end; // Align to the right
`;

export const ThemeButtonContainer = styled.div`
    cursor: pointer;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; // Circular shape
    background-color: transparent;

    &:hover {
        background-color: ${props => props.theme.buttonHoverColor};
    }

    svg {
        width: 24px;
        height: 24px;
        fill: ${props => props.theme.headerTextColor};
    }
`;