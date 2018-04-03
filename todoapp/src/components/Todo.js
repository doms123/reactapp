import React from 'react';
import { Link, Redirect, browserHistory } from 'react-router-dom';
import MdAdd from 'react-icons/lib/md/add';
import { Header } from './Header';
import { ListItem } from './List-item';

export const Todo = (props) => {
  const {todos} = props

  return (
    <div className="Todo">
      <Header />
      <section>
        <div className="wrapInner">
          <div className="todoPage">
            <div className="todoHeader">
              <h2>Todo List</h2>
              <Link to="add-todo"><button className="addButton"><MdAdd /> Add Todo</button></Link>
            </div>
            <div className="todoList">
              <ul>
                {todos && todos.map(todo => (
                  <ListItem key={todo.id} todo={todo} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}