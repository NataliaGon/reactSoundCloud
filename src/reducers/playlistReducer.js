import { ADD_PLAYLIST } from '../components/playlist-sidebar-nav/createPlaylist.constants';
import { DELETE_PLAYLIST, TOGGLE_SPAN_INPUT,CHANGE_TITLE } from '../components/each-playlist/each-playlist.constants';

const initialState = {
  playlists:[]
};

function playlistReducer(state = initialState, action) {

  const allPlaylists=[...state.playlists];
  
  switch (action.type) {

      case ADD_PLAYLIST:
      return {
        playlists:[...state.playlists, action.playlist]
      };

      case  DELETE_PLAYLIST: 
      const indexToRemove = allPlaylists.findIndex((onePlayList) => onePlayList.id === action.id);
      allPlaylists.splice(indexToRemove, 1);
      return{   
        playlists:[...allPlaylists]
      };

      case TOGGLE_SPAN_INPUT:
      for(let i of allPlaylists){
          if (i.id === action.id){
              i.isNameHidden=!i.isNameHidden;
              i.isInputeHidden=!i.isInputeHidden;
          }
      }
      return{
        playlists:[...allPlaylists]
      };

      case CHANGE_TITLE:
    
        for(let i of allPlaylists){
            if (i.id === action.id){
                if(action.title){
                i.title=action.title;
            }else{
                i.title='Untitled'; 
            }
            }
        }
        return{
          playlists:[...allPlaylists]
        };

      
    default:
      return state;
  }
}

export default playlistReducer;