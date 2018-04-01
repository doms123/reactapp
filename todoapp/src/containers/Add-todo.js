import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import MdAdd from 'react-icons/lib/md/add';
import MdCancel from 'react-icons/lib/md/cancel';
import { Header } from '../components/Header';
import '../style.css';
import { ADD_TODO_REQUESTED } from '../actions/types';

class AddTodo extends Component {

  constructor(props) {
    super();

    this.state = {
      title: '',
      body: '',
      completed: 'No',
      fireRedirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let val = e.target.value;
    let name = e.target.name;
    this.setState({[name]: val});
  }
  
  handleSubmit(e) {
    e.preventDefault();

    let completed = this.state.completed == "Yes" ? true : false;

    const todo = {
      title: this.state.title,
      completed: completed
    }

    this.props.addTodo(todo);

    this.setState({ fireRedirect: true });
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    return (
      <div className="App">
        <Header />
        <section>
          <div className="wrapInner">
            <div className="todoPage">
              <div className="todoHeader">
                <h2>Add Todo</h2>
              </div>
              <form className="todoForm" onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter todo title" />
                </div>
                <div>
                  <label htmlFor="completed">Completed</label>
                  <select name="completed" onChange={this.handleChange} value={this.state.completed}>
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
                <button type="submit" className="formButton"><MdAdd /> Add</button>
                <Link to="/"><button type="button" className="cancelButton"><MdCancel /> Cancel</button></Link>
              </form>
              {fireRedirect && (
                <Redirect to={from || '/'}/>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (todo) => {
        dispatch({
          type: ADD_TODO_REQUESTED,
          payload: todo
        });
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);