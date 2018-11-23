import {createStore, combineReducers } from "redux";

import songReducer from "./reducers/songReducer";
import playlists from "./reducers/playlistReduser";

const reducer = combineReducers({
    currentSong: songReducer,
    playlists: playlists
    
})

export default createStore(reducer);
 