// State aregument is not application state, only the state this reducer is
// responsible for.  Will only get called on changing state
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
