import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import styled, { themeType } from './components/styled';
import { changeModeAction, RootStae } from './redux/reducer';

const Main = styled.main`
  width : 100vw;
  height : 100vh;
  font-family : sans-serif;
  background-color :${props => props.theme.background};  
  color :${props => props.theme.textColor};
  transition : background-color 1s, color 1s;
  
  .toggle-container {
    font-size : 30px;
    width : 100%;
    height : 100%;

    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;

    span {
      cursor: pointer;
      user-select: none;
    }
    
    p {
      text-shadow : 2px 2px 3px ${props => props.theme.boxShadow};
      font-size : 0.7em;
      margin : 12px 0 0 0;
    }
  }
`;

const AppContainer = () => {
  const theme = useTheme() as themeType;
  const dispatch = useDispatch();
  const themeState = useSelector((state : RootStae) => state.theme);

  const toggleForDarkMode = useCallback(() => {
    localStorage.setItem('dark', JSON.stringify({ value : !theme.darkMode }))
    dispatch(changeModeAction({ theme : !themeState }))
  }, [theme, dispatch, themeState])
  
  return (
   <Main className="App">
      <header className="toggle-container">
        {theme?.darkMode ? <span onClick={toggleForDarkMode} className="dark">🌙</span> 
        : <span onClick={toggleForDarkMode} className="light">🌞</span> }
        <p>{theme.darkMode ? '어두워요': '밝아요' }</p>
      </header>
    </Main>
  );
}

export default (AppContainer);
