import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../style.css'
import { FETCH_TODOS, FETCH_TODOS_REQUESTED } from '../actions/types'
import { Todo } from '../components/Todo'

class App extends Component {
  componentWillMount() {
    this.props.fetchTodos()
  }

  render() {
    const {all} = this.props
    return (
      <div className="App">
        <Todo todos={all} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)