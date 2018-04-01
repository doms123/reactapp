import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MdSave from 'react-icons/lib/md/save';
import MdCancel from 'react-icons/lib/md/cancel';

import '../style.css';

class EditTodo extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapInner">
            <h1><Link to="/">TODO APP</Link></h1>
          </div>
        </header>
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
                    <label htmlFor="description">Description</label>
                    <textarea name="description" rows="5" id="description"/>
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
        user: state.user,
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);