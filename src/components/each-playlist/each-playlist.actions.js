import {
  DELETE_PLAYLIST,
  // TOGGLE_SPAN_INPUT,
  CHANGE_TITLE
} from "./each-playlist.constants";

export function deletePlaylist(id) {
  return {
    type: DELETE_PLAYLIST,
    id
  };
}
// export function toogleSpanInput(id) {
//   return {
//     type: TOGGLE_SPAN_INPUT,
//     id
//   };
// }
export function changeTitle(title,id) {
  return {
    type: CHANGE_TITLE,
    title,
    id
  };
}
