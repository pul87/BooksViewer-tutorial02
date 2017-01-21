// state argument is not application state
// just the state previously generated
// by the rootReducer, for example u can assign
// a counter on the state of teh reducer.
export default function(state = null, action){

  switch(action.type) {
    case 'BOOK_SELECTED': {
      return action.payload;
    }

  }
  return state;
}
