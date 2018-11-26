
import { TO_PLAY_SONG, ADD_REMOVE_SONG_FROM_PLAYLIST} from "./song.constants";

export function selectSong(data) {
  return {
    type: TO_PLAY_SONG,
    data
  };
}

export function addOrRemoveSongFromPlaylist(song, playlistId, addSong){
    return {
    type: ADD_REMOVE_SONG_FROM_PLAYLIST,
    song,
    playlistId,
    addSong
}
}
