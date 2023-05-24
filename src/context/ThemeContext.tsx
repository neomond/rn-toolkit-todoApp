import React, {createContext, useState, ReactNode} from 'react';

interface Theme {
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: {backgroundColor: '', textColor: ''},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const lightTheme: Theme = {
    backgroundColor: '#F8F8F8',
    textColor: '#575767',
  };

  const darkTheme: Theme = {
    backgroundColor: '#141419',
    textColor: '#dadada',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
