import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import GameInfo from '../GameInfo/GameInfo';
import { GameContainer } from './Game.styles';
import { Header, HeaderTitle, BackButton, ThemeButtonContainer, HeaderRight } from '../shared/shared.styles'
import { ThemeContext } from '../../contexts/ThemeContext';
import { ReactComponent as IconXOutlined } from '../../icons/icon-x-outlined.svg';
import { ReactComponent as BrushLight } from '../../icons/brush-light.svg';
import { ReactComponent as BrushDark } from '../../icons/brush-dark.svg';
import { useNavigate } from 'react-router-dom';
import useSound from '../../hooks/useSound';


const Game = () => {
    const { currentTheme, toggleTheme } = React.useContext(ThemeContext);
    const { playSound: playClickSound } = useSound('/sounds/click.mp3');
    const navigate = useNavigate();

    const handleBack = () => {
        playClickSound()
        navigate('/');
    }

    return (
        <div>
            <Header>
                <HeaderRight>
                    <BackButton onClick={handleBack}>
                        <IconXOutlined />
                    </BackButton>
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
            <GameContainer>
                <GameBoard />
                <GameInfo />
            </GameContainer>
        </div>

    );
};

export default Game;