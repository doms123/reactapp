import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style.css';
import { FETCH_TODOS, FETCH_TODOS_REQUESTED } from '../actions/types';
import { Todo } from '../components/Todo';


class App extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="App">
        <Todo todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todo.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchTodos: () => {
        dispatch({
          type: FETCH_TODOS_REQUESTED,
          payload: ''
        });
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);