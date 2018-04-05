import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../style.css'
import { FETCH_TODOS, FETCH_TODOS_REQUESTED, DELETE_TODO_REQUESTED } from '../actions/types'
import { Todo } from '../components/Todo'

class App extends Component {
  
  componentWillMount() {
    this.props.fetchTodos()
  }

  deleteItem = (id) => () => {
    this.props.deleteTodo(id)
  }

  render() {
    const {all} = this.props
    return (
      <div className="App">
        <Todo todos={all} onDelete={this.deleteItem} />
      </div>
    )
  }
}

const mapStateToProps = ({todos}) => ({
  all: todos && todos.all
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => {
      dispatch({
        type: FETCH_TODOS_REQUESTED,
        payload: ''
      })
    },
    deleteTodo: (id) => {
      dispatch({
        type: DELETE_TODO_REQUESTED,
        payload: id
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)