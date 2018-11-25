import { DELETE_PLAYLIST } from './each-playlist.constants';

export function deletePlaylist(playlist) {
  return {
    type: DELETE_PLAYLIST,
    playlist
  };
}