import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
class BookList extends Component {
  renderList() {
    return (
      this.props.books.map((book)=>{
        return (
          <li
            key = {book.title}
            onClick = {() => this.props.selectBook(book)}
            className="list-group-item">{book.title}</li>
        )
      })
    )
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//GLUE function.
function mapStateToProps(state){
  //whatever is returned will show up as props inside of boolist
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  //whenever selectbook is called, result should be passed to
  //all of our reducers - bind action creators and dispatch do this
  return bindActionCreators({selectBook:selectBook}, dispatch)
}

//connect takes a function and component and produces a container.
//the container is aware of the state that it is contained by redux.

// Promote booklist from a component to a container - it needs to know about the
// new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
