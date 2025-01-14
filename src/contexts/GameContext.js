import React, { createContext, useState, useCallback, useMemo } from 'react';
import { checkForWinner } from '../utils/gameLogic';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const updateScores = useCallback((winner) => {
    if (winner === 'X') {
      setPlayer1Score(player1Score + 1);
    } else if (winner === 'O') {
      setPlayer2Score(player2Score + 1);
    }
  }, [player1Score, player2Score]);

  const handleSquareClick = useCallback((index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winnerResult = checkForWinner(newBoard);
    if (winnerResult) {
      setGameOver(true);
      setWinner(winnerResult);
      updateScores(winnerResult);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }, [board, currentPlayer, gameOver, updateScores]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameOver(false);
    setWinner(null);
  }, []);

  const value = useMemo(() => ({
    board,
    currentPlayer,
    player1Score,
    player2Score,
    gameOver,
    winner,
    handleSquareClick,
    resetGame,
  }), [board, currentPlayer, player1Score, player2Score, gameOver, winner, handleSquareClick, resetGame]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};