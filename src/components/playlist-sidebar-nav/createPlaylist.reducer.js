import { ADD_PLAYLIST } from './createPlaylist.constants';

const initialState = {
  playlists:[]
};

function playlistReducer(state = initialState, action) {
  console.log(state);
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