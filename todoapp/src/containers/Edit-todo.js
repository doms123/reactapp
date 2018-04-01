import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MdSave from 'react-icons/lib/md/save';
import MdCancel from 'react-icons/lib/md/cancel';
import { Header } from '../components/Header';
import { FETCH_TODO_REQUESTED } from '../actions/types';
import '../style.css';

class EditTodo extends Component {
  componentWillMount() {
    const todoId = parseInt(this.props.match.params.id);
    this.props.fetchSingleTodo(todoId);

    console.log('testdata', this.props)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <div className="wrapInner">
            <div className="todoPage">
              <div className="todoHeader">
                <h2>Edit Todo - ID: {this.props.match.params.id}</h2>
              </div>
              <div className="todoList">
                <form className="todoForm">
                  <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Enter todo title" />
                  </div>
                  <div>
                    <label htmlFor="completed">Completed</label>
                    <select name="completed">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleTodo: (id) => {
            dispatch({
                type: FETCH_TODO_REQUESTED,
                payload: id
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);