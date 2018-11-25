import { ADD_PLAYLIST } from '../components/playlist-sidebar-nav/createPlaylist.constants';
import { DELETE_PLAYLIST } from '../components/each-playlist/each-playlist.constants';

const initialState = {
  playlists:[]
};

function playlistReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ADD_PLAYLIST:
      return {
        playlists:[...state.playlists, action.playlist]
      };
      case  DELETE_PLAYLIST:
      const allPlaylists=[...state.playlists];
      const indexToRemove = allPlaylists.findIndex((onePlayList) => onePlayList.id === action.id);
      allPlaylists.splice(indexToRemove, 1);

      return{   
        playlists:[...allPlaylists]
      }
  
    default:
      return state;
  }
}

export default playlistReducer;