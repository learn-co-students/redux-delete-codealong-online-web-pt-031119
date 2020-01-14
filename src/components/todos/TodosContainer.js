import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => { return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} text={todo} />) }


  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText})
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
