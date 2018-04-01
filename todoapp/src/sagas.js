import { call, put, takeEvery  } from "redux-saga/effects";
import axios from "axios";
import { FETCH_TODOS, FETCH_TODOS_FAILED, FETCH_TODOS_REQUESTED, ADD_TODO, ADD_TODO_REQUESTED, ADD_TODO_FAILED, FETCH_TODO, FETCH_TODO_FAILED, FETCH_TODO_REQUESTED, } from "./actions/types";

// ##### START FETCH ALL TODOS #####
function getTodosApi() {
  return axios.get('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(todos => todos.data).catch(error => {
    throw error;
  });
}

function* fetchTodos() {
  try {
     const todos = yield call(getTodosApi);
     yield put({type: FETCH_TODOS, payload: todos});
  } catch (e) {
     yield put({type: FETCH_TODOS_FAILED, message: e.message});
  }
}
// ##### END FETCH TODOS #####

// ##### START ADD TODO #####
function addTodoApi(todo) {
  return axios.post('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: todo
  }).then(todos => todos.data).catch(error => {
    throw error;
  });
}

function* addtodo(action) {
  try {
     const todo = yield call(addTodoApi, action.payload);
     yield put({type: ADD_TODO, payload: todo.data});
  } catch (e) {
     yield put({type: ADD_TODO_FAILED, message: e.message});
  }
}
// ##### END ADD TODO #####

// ##### START FETCH SINGLE TODOS #####
function getTodoApi(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    headers: {
      'Accept': 'application/json'
    }
  }).then(todo => todo.data).catch(error => {
    throw error;
  });
}

function* fetchTodo(action) {
  try {
     const todo = yield call(getTodoApi, action.payload);
     yield put({type: FETCH_TODO, payload: todo});
  } catch (e) {
     yield put({type: FETCH_TODO_FAILED, message: e.message});
  }
}
// ##### END FETCH SINGLE TODOS #####

function* mySaga() {
  yield takeEvery(FETCH_TODOS_REQUESTED, fetchTodos);
  yield takeEvery(ADD_TODO_REQUESTED, addtodo);
  yield takeEvery(FETCH_TODO_REQUESTED, fetchTodo);
}


export default mySaga;
