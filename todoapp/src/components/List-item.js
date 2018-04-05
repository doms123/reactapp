import React from 'react';
import { Link, Redirect, browserHistory } from 'react-router-dom';
import MdEdit from 'react-icons/lib/md/edit';
import MdDeleteForever from 'react-icons/lib/md/delete-forever';

export const ListItem = (props) => {
  const {todo, deleteItem} = props
  const id = todo && todo.id
  return (
    <li key={id}>
      <h3><Link to={`/single-todo/${id}`}>{todo && todo.title}</Link></h3>
      <div className="listAction">
        <Link to={`/edit-todo/${id}`}><button className="todoEdit"><MdEdit /> Edit</button></Link>
        <button onClick={deleteItem(id)} className="todoDelete"><MdDeleteForever /> Delete</button>
      </div>
    </li>
  );  
}


