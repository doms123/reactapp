import React from 'react';
import { Link, Redirect, browserHistory } from 'react-router-dom';
import MdEdit from 'react-icons/lib/md/edit';
import MdDeleteForever from 'react-icons/lib/md/delete-forever';

export const ListItem = (props) => {
  return (
    <li key={props.todo.id}>
      <h3><Link to={'/single-todo/'+props.todo.id}>{props.todo.title}</Link></h3>
      <div className="listAction">
        <Link to={'/edit-todo/'+props.todo.id}><button className="todoEdit"><MdEdit /> Edit</button></Link>
        <button className="todoDelete"><MdDeleteForever /> Delete</button>
      </div>
    </li>
  );  
}