import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import AddTodo from './containers/Add-todo';
import EditTodo from './containers/Edit-todo';
import SingleTodo from './containers/Single-todo';
import store  from './store';



ReactDOM.render(
<Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/add-todo" component={AddTodo} />
      <Route path="/edit-todo/:id" component={EditTodo} />
      <Route path="/single-todo/:id" component={SingleTodo} />
    </div>
  </Router>
</Provider>
, document.getElementById('root'));



