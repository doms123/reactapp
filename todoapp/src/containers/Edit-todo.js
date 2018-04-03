import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import MdSave from 'react-icons/lib/md/save'
import MdCancel from 'react-icons/lib/md/cancel'
import { Header } from '../components/Header'
import { FETCH_TODO_REQUESTED, UPDATE_TODO_REQUESTED, UPDATE_SAVE_TODO_REQUESTED } from '../actions/types'
import '../style.css'

class EditTodo extends Component {
  state = {
    fireRedirect: false
  }

  componentWillMount() {
    const { match: { params }, fetchTodo, todos } = this.props
    fetchTodo(params.id)

    console.log('this.props', this.props);
  }

  handleChange = (e) => {
    const {match: {params}, updateTodo} = this.props
    updateTodo({
      id: params && params.id,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { single, updateTodoSave } = this.props
    
    updateTodoSave(single);

    this.setState({ fireRedirect: true })
  }
  
  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    const {single} = this.props
    console.log('single', single)
    return (
      <div className="App">
        <Header />
        <section>
          <div className="wrapInner">
            <div className="todoPage">
              <div className="todoHeader">
                <h2>Edit Todo</h2>
              </div>
              <div className="todoList">
                <form className="todoForm" onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={single && single.title || ''} placeholder="Enter todo title" onChange={this.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="completed">Completed</label>
                    <select name="completed" value={single && single.completed ? 'Yes' : 'No'} onChange={this.handleChange}>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                  <button type="submit" className="formButton"><MdSave /> Save</button>
                  <Link to="/"><button type="button" className="cancelButton"><MdCancel /> Cancel</button></Link>
                </form>
              </div>
            </div>
          </div>
        </section>
        {fireRedirect && (
          <Redirect to={from || '/'} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ todos: { single, all } }) => ({ single, all })

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodo: (id) => {
      dispatch({
        type: FETCH_TODO_REQUESTED,
        payload: id
      })
    },
    updateTodo: (payload) => {
      dispatch({
        type: UPDATE_TODO_REQUESTED,
        payload
      })
    },
    updateTodoSave: (payload) => {
      dispatch({
        type: UPDATE_SAVE_TODO_REQUESTED,
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);