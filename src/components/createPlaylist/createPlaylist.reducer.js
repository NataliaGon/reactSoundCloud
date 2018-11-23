import { ADD_PLAYLIST } from './createPlaylist.constants';
const playlists=[];
const initialState = {
  playlists
};

function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYLIST:
      return {
        playlists:state.playlists.push(action.playlist)
      };
    default:
      return state;
  }
}

export default playlistReducer;