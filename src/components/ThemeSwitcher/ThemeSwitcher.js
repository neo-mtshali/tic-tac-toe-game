import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeSwitcherContainer, ToggleSwitch, Slider, Checkbox } from './ThemeSwitcher.styles';

const ThemeSwitcher = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherContainer>
      <ToggleSwitch>
        <Checkbox type="checkbox" checked={currentTheme === 'dark'} onChange={toggleTheme} />
        <Slider />
      </ToggleSwitch>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;