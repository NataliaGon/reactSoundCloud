import {createStore, combineReducers } from "redux";

import songReducer from "./reducers/songReducer";
import playlistReducer from "./components/createPlaylist/createPlaylist.reducer.js";

const reducer = combineReducers({
    currentSong: songReducer,
    playlists: playlistReducer
})

export default createStore(reducer);
 