import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { themeType } from './Theme/styled';
import { changeModeAction, RootStae } from '../redux/reducer';
import Header from './Navigation/Header';
import PostContainer from './Post/PostContainer';

const Main = styled.main`
  width : 100vw;
  height : 100vh;
  font-family : sans-serif;
  background-color :${props => props.theme.background};  
  color :${props => props.theme.textColor};
  transition : background-color 1s, color 1s;
  
  
`;

const AppContainer = () => {

  return (
   <Main className="App">
      <Header/>
      <PostContainer />
    </Main>
  );
}

export default (AppContainer);
