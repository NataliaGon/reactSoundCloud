import { TO_PLAY_SONG} from "../components/song/song.constants";

const initialState = {
  currentSong:[]
};

export default function songReducer(state = initialState , action) {
  switch (action.type) {

  case TO_PLAY_SONG:
   return{
    currentSong:action.data   
   }
  default:
  return state;
}
}