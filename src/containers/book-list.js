import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends  Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


// state is application state
function mapStateToProps (state) {
  // this returns info to this.props
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);