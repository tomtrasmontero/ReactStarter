import React, { Component } from 'react';
// import connect function from react-redux.
import { connect } from 'react-redux';
// this will bind the action creators to all reducers
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

// takes application state in redux and returns props in react component
function mapStateToProps(state) {
  // Whatever is returned will show up as props in BookList above
  // this.props.books = state.books
  return {
    books: state.books,
  };
}

// Antything returned from this function will end up as props on the BookList
// container.  Same as mapStateToProps
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our
  // reducers.  bindActionCreators and dispatch are responsible for sending
  // updated state to all of the reducers
  // this.props.selectBook = selectBook(action creator)
  return bindActionCreators({ selectBook }, dispatch);
}

// connect mapStateToProps and actions creator to return a component
// which will be exported.
// connect(function, ...function)(container)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
