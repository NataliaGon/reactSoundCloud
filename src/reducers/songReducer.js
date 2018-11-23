export default function songReducer(state = null, action) {
  
  if (action.type==="SELECT_SONG") {
   return action.song;     
  }

  return state;
}
