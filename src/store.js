import {createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import songReducer from "./reducers/songReducer";
import playlistReducer from "./reducers/playlistReducer";

const reducer = combineReducers({
    currentSong: songReducer,
    playlists: playlistReducer
})

export default createStore(reducer,composeWithDevTools(
 
  ));
 