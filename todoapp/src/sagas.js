import { call, put, takeEvery  } from "redux-saga/effects";
import axios from "axios";
import { 
  UPDATE_SAVE_TODO, UPDATE_SAVE_TODO_FAILED, UPDATE_SAVE_TODO_REQUESTED, 
  FETCH_TODOS, 
  UPDATE_TODO_REQUESTED, UPDATE_TODO, 
  FETCH_TODO_SINGLE, FETCH_TODOS_FAILED, FETCH_TODOS_REQUESTED, 
  ADD_TODO, ADD_TODO_REQUESTED, ADD_TODO_FAILED, 
  FETCH_TODO, FETCH_TODO_FAILED, FETCH_TODO_REQUESTED 
} from "./actions/types";


// ##### START FETCH ALL TODOS #####
function* fetchTodos() {
  try {
    const todos = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
    yield put({type: FETCH_TODOS, payload: todos.data});
  } catch (e) {
    yield put({type: FETCH_TODOS_FAILED, message: e.message});
  }
}

// ##### START ADD TODO #####
function* addTodo({payload}) {
  try {
    const todo = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    });
    yield put({ type: ADD_TODO, payload});
  } catch (e) {
    yield put({type: ADD_TODO_FAILED, message: e.message});
  }
}

// ##### START FETCH SINGLE TODOS #####
function* fetchTodo({payload}) {
  try {
    const todo = yield call(axios.get, `https://jsonplaceholder.typicode.com/todos/${payload}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    console.log('todo.data', todo.data)
    yield put({type: FETCH_TODO_SINGLE, payload: todo.data});
  } catch (e) {
    yield put({type: FETCH_TODO_FAILED, message: e.message});
  }
}

function* updateTodo({payload}) {
  yield put({ type: UPDATE_TODO, payload});
}

function* updateSaveTodo({payload}) {
  console.log('params', payload)
  try {
    const todo = yield call(axios.put, `https://jsonplaceholder.typicode.com/todos/${payload.id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    });
    console.log('todo', )
    yield put({ type: UPDATE_SAVE_TODO, payload });
  } catch (e) {
    yield put({ type: UPDATE_SAVE_TODO_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(FETCH_TODOS_REQUESTED, fetchTodos);
  yield takeEvery(ADD_TODO_REQUESTED, addTodo);
  yield takeEvery(FETCH_TODO_REQUESTED, fetchTodo);
  yield takeEvery(UPDATE_TODO_REQUESTED, updateTodo);
  yield takeEvery(UPDATE_SAVE_TODO_REQUESTED, updateSaveTodo);
  
}

export default mySaga;
