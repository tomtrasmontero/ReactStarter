// action in this function needs to connect to all reducers
// action creator
export default function selectBook(book) {
  //  selectBook is an ActionCreator, it need to return an action,
  //  an object with a type property.
  return {
    // return type and payload.
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
