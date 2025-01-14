import React from 'react';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import { ReactComponent as TicTacToeLogo } from '../../icons/tic-tac-toe.svg'; // Import
import { ReactComponent as BrushLight } from '../../icons/brush-light.svg';
import { ReactComponent as BrushDark } from '../../icons/brush-dark.svg';
import {
    HomeContainer,
    Title,
    ButtonContainer,
    Button,
    LogoContainer
} from './Home.styles';
import { Header, HeaderTitle, ThemeButtonContainer, HeaderRight } from '../shared/shared.styles'
import { ThemeContext } from '../../contexts/ThemeContext';
import useSound from '../../hooks/useSound';


const Home = () => {
    const navigate = useNavigate();
    const { isModalOpen, openModal, closeModal } = useModal();
    const { currentTheme, toggleTheme } = React.useContext(ThemeContext);
    const { playSound: playClickSound } = useSound('/sounds/click.mp3');


    return (
        <div>
            <Header>
                <HeaderRight>
                    <div style={{ width: '36px' }}></div>
                </HeaderRight>
                <HeaderTitle>
                    Tic Tac Toe
                </HeaderTitle>
                <HeaderRight>
                    <ThemeButtonContainer onClick={() => { playClickSound(); toggleTheme(); }}>
                        {currentTheme === 'light' ? <BrushDark /> : <BrushLight />}
                    </ThemeButtonContainer>
                </HeaderRight>
            </Header>
            <HomeContainer>
                <LogoContainer>
                    <TicTacToeLogo /> {/* Use the SVG */}
                </LogoContainer>
                <Title>Tic Tac Toe</Title>
                <ButtonContainer>
                    <Button onClick={() => navigate('/game')}>Start Game</Button>
                    <Button onClick={openModal}>How to Play</Button>
                </ButtonContainer>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2>How to Play</h2>
                    <p>Tic Tac Toe is a two-player game. One player is X, and the other is O. Players take turns placing their mark on a 3x3 grid.</p>
                    <p>The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.</p>
                    <p>If the grid is full and no player has three in a row, the game is a draw.</p>
                    <Button onClick={closeModal}>Close</Button>
                </Modal>
            </HomeContainer>
        </div>

    );
};

export default Home;