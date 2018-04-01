import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdEdit from 'react-icons/lib/md/edit';
import MdDeleteForever from 'react-icons/lib/md/delete-forever';
import '../style.css';

class SingleTodo extends Component {
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
                <h2>Todo Details - ID: {this.props.match.params.id}</h2>
                <Link to="/"><button className="addButton"><MdArrowBack /> Back</button></Link>
              </div>
              <div className="todoList">
                <form className="todoForm">
                  <div>
                    <p>Title</p>
                    <p>Sample Todo Title</p>
                  </div>
                  <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div>
                    <p>Completed: Yes</p>
                  </div>
                  <Link to="/"><button type="button" className="editButton"><MdEdit /> Edit</button></Link>
                  <Link to="/"><button type="button" className="deleteButton"><MdDeleteForever /> Delete</button></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo);