import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// defining "state" of books, all reducer will have access to this
const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
