import {createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import songReducer from "./reducers/songReducer";
import playlistReducer from "./components/playlist-sidebar-nav/createPlaylist.reducer";

const reducer = combineReducers({
    currentSong: songReducer,
    playlists: playlistReducer
})

export default createStore(reducer,composeWithDevTools(
 
  ));
 