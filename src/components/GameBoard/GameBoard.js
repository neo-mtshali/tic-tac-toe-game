import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { BoardContainer, Square } from './GameBoard.styles';
import useSound from '../../hooks/useSound';
import { ReactComponent as IconXFilled } from '../../icons/icon-x-filled.svg';
import { ReactComponent as IconXOutlined } from '../../icons/icon-x-outlined.svg';
import { ReactComponent as IconOFilled } from '../../icons/icon-o-filled.svg';
import { ReactComponent as IconOOutlined } from '../../icons/icon-o-outlined.svg';

const GameBoard = () => {
  const { board, handleSquareClick } = useContext(GameContext);
  const { currentTheme } = useContext(ThemeContext);
  const { playSound: playClickSound } = useSound('/sounds/click.mp3');

  const getIcon = (value) => {
    if (value === 'X') {
      return currentTheme === 'light' ? <IconXFilled /> : <IconXOutlined />;
    } else if (value === 'O') {
      return currentTheme === 'light' ? <IconOFilled /> : <IconOOutlined />;
    }
    return null;
  };

  return (
    <BoardContainer>
      {board.map((value, index) => (
        <Square
          key={index}
          onClick={() => {
            handleSquareClick(index);
            playClickSound();
          }}
          disabled={value !== null}
        >
          {getIcon(value)}
        </Square>
      ))}
    </BoardContainer>
  );
};

export default GameBoard;