import { TO_PLAY_SONG} from "../components/song/song.constants";

const initialState = {
  currentSong:[]
};

export default function songReducer(state = initialState , {type, data}) {
  switch (type) {
    case TO_PLAY_SONG:
      return{ currentSong:data }
    default:
      return state;
  }
}