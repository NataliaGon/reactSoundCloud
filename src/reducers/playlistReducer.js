import { ADD_PLAYLIST } from "../components/playlist-sidebar-nav/createPlaylist.constants";
import {
  DELETE_PLAYLIST,
  CHANGE_TITLE
} from "../components/each-playlist/each-playlist.constants";
import { ADD_REMOVE_SONG_FROM_PLAYLIST } from "../components/song/song.constants";

const initialState = {
  playlists: []
};

function playlistReducer(state = initialState, action) {
  

  switch (action.type) {
    case ADD_PLAYLIST:
      return {
        playlists: [...state.playlists, action.playlist]
      };

    case DELETE_PLAYLIST:
      const playlists = state.playlists.filter(
        playlist => playlist.id !== action.id
      );
      return {
        playlists
      };

    case CHANGE_TITLE:
      return { 
        playlists: state.playlists.map(playlist => {
          if (playlist.id === action.id){
            if(action.title){
              playlist.title=action.title;
        }else{
          playlist.title='Untitled'; 
        }
        }
          return playlist;
        })
      };

    case ADD_REMOVE_SONG_FROM_PLAYLIST:
    const allPlaylists = [...state.playlists];
      for (let playlist of allPlaylists) {
        if (playlist.id === action.playlistId) {
          if (action.addSong) {
            //  Checkbox checked, need to add song
            playlist.songs.push(action.song);
          } else {
            //Remove song from playlist
            const index = playlist.songs.findIndex(
              element => element.id === action.song.id
            );

            playlist.songs.splice(index, 1);
          }
        }
      }
      return {
        playlists: [...allPlaylists]
      };
    default:
      return state;
  }
}

export default playlistReducer;
