import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import useSound from '../../hooks/useSound';
import {
    GameInfoContainer,
    Score,
    Status,
    ButtonContainer,
    ResetButton
} from './GameInfo.styles';

const GameInfo = () => {
    const { player1Score, player2Score, currentPlayer, gameOver, winner, resetGame } = useContext(GameContext);
    const { playSound: playWinSound } = useSound('/sounds/win.mp3');

    const handleReset = () => {
        resetGame();
    };

    React.useEffect(() => {
        if (gameOver && winner !== 'Draw') {
            playWinSound();
        }
    }, [gameOver, winner, playWinSound]);

    return (
        <GameInfoContainer>
            <Score>Player 1 (X): {player1Score}</Score>
            <Score>Player 2 (O): {player2Score}</Score>
            <Status>
                {gameOver
                    ? winner === 'Draw'
                        ? "It's a Draw!"
                        : `Winner: ${winner}`
                    : `Current Turn: ${currentPlayer}`}
            </Status>
            <ButtonContainer>
                <ResetButton onClick={handleReset}>Reset Game</ResetButton>
            </ButtonContainer>
        </GameInfoContainer>
    );
};

export default GameInfo;