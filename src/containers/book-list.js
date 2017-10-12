import React, {Component} from 'react';
import { connect } from 'react-redux';


class BookList extends Component {
  renderList() {
    return (
      this.props.books.map((book)=>{
        return (
          <li key = {book.title} className="list-group-item">{book.title}</li>
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
//connect takes a function and component and produces a container.
//the container is aware of the state that it is contained by redux.
export default connect(mapStateToProps)(BookList);
