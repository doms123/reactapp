import { FETCH_TODOS, ADD_TODO, FETCH_TODO } from '../actions/types';

const initialState = {
  todos: []
};
export default (state = initialState, action) => {
  switch(action.type) {

    case FETCH_TODOS : 
      return {
        ...state,
        todos: action.payload
      }

    case ADD_TODO :
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    
    case FETCH_TODO :
      return {
        ...state,
        todos: action.payload
      }

    default:
    return state;
  }
}

