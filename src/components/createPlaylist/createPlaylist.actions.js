
import { ADD_PLAYLIST } from './createPlaylist.constants';

export default function addPlaylist(playlist) {
  return {
    type: ADD_PLAYLIST,
    playlist
  };
}