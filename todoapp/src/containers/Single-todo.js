import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdEdit from 'react-icons/lib/md/edit';
import MdDeleteForever from 'react-icons/lib/md/delete-forever';
import { Header } from '../components/Header'
import { FETCH_TODO_REQUESTED } from '../actions/types';
import '../style.css';

class SingleTodo extends Component {
  componentWillMount() {
    const {match: {params}, fetchTodo, todos} = this.props
    fetchTodo(params.id)
  }

  render() {
    const { single } = this.props

    return (
      <div className="App">
        <Header />
        <section>
          <div className="wrapInner">
            <div className="todoPage">
              <div className="todoHeader">
                <h2>Todo Details - ID: {single && single.id}</h2>
                <Link to="/"><button className="addButton"><MdArrowBack /> Back</button></Link>
              </div>
              <div className="todoList">
                <form className="todoForm">
                  <div>
                    <p>Title</p>
                    <p>{single && single.title}</p>
                  </div>
                  <div>
                    <p>Completed: {single && single.completed === true ? 'Yes' : 'No'}</p>
                  </div>
                  <Link to={`/edit-todo/${single && single.id}`}><button type="button" className="editButton"><MdEdit /> Edit</button></Link>
                  <Link to={`/`}><button type="button" className="deleteButton"><MdDeleteForever /> Delete</button></Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({todos: {single}}) => ({single})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodo: (id) => {
      dispatch({
        type: FETCH_TODO_REQUESTED,
        payload: id
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo);