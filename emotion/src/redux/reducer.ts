import { combineReducers, configureStore, createSlice, getDefaultMiddleware, PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'darkTheme',
    initialState : false,
    reducers : {
        changeMode : (state, action : PayloadAction<{ theme : boolean }>) => action.payload.theme
    }
})

const reducers = combineReducers({
    theme : themeSlice.reducer
})

export type RootStae = ReturnType<typeof reducers>;


export const {
    changeMode : changeModeAction
} = themeSlice.actions;

export default configureStore({
    reducer : reducers,
    middleware : [...getDefaultMiddleware()],
  // getDefaultMiddleware -> devTools 같은거
    devTools : process.env.NODE_ENV !== 'production'
})