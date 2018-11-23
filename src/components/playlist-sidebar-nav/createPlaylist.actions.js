
import { ADD_PLAYLIST } from './createPlaylist.constants';

export function addPlaylist(playlist) {
  return {
    type: ADD_PLAYLIST,
    playlist
  };
}