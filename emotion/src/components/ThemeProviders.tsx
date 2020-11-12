import { ThemeProvider } from 'emotion-theming'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeModeAction, RootStae } from '../redux/reducer';
import { themeType } from './styled';

const white = '#ffffff';
const black = '#161617';

const ThemeProviders = ({ children } : { children : React.ReactNode}) => {
    const keyInStorage = localStorage.getItem('dark')
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state : RootStae) => state.theme);

    const theme = useMemo(() : themeType => ({
        color : isDarkMode ? black : white,
        background : isDarkMode ? "rgba(20, 20, 20, 0.7)" : "rgba(230, 230, 230)",
        textColor : isDarkMode ? white : black,
        boxShadow : isDarkMode ? 'rgba(230, 230, 230, 0.3)' :'rgba(20, 20, 20, 0.3)',
        darkMode : isDarkMode,
    }), [isDarkMode]);


    useEffect(() => {
        if(keyInStorage !== null) {
            if(JSON.parse(keyInStorage).value) {
                !isDarkMode && dispatch(changeModeAction({ theme : true }))
            } else {
                isDarkMode && dispatch(changeModeAction({ theme : false }))
            }
        }
    },[isDarkMode, keyInStorage, dispatch])
    

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviders
