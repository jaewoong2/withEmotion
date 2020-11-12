import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeModeAction, RootStae } from '../../redux/reducer';
import styled, { themeType } from '../Theme/styled'

const Head = styled.header`
    width : 100%;
    border-bottom : 2px solid black;

    .toggle-container {
        width : 100%;

        display : flex;
        justify-content : flex-end;
        align-items : center;
        font-family : 'Noto Serif KR', serif;
        
        p {
            flex : 1;
            margin : 0;
            padding : 0;
            font-size : 1.2em;

        }

        span {
            cursor: pointer;
            font-size : 1.6em;
            user-select: none;
            margin : 5px;
        }
  }
`


const Header = () => {
    const theme = useTheme() as themeType;
    const dispatch = useDispatch();
    const themeState = useSelector((state : RootStae) => state.theme);
  
    const toggleForDarkMode = useCallback(() => {
      localStorage.setItem('dark', JSON.stringify({ value : !theme.darkMode }))
      dispatch(changeModeAction({ theme : !themeState }))
    }, [theme, dispatch, themeState])
    
    
    
    return (
        <Head>
        <header className="toggle-container">
            <p>제 목</p>
            {theme?.darkMode ? <span onClick={toggleForDarkMode} className="dark">🌙</span> 
            : <span onClick={toggleForDarkMode} className="light">🌞</span> }
        </header>
        </Head>
    )
}

export default Header
