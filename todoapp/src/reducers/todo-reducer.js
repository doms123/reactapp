import { FETCH_TODOS, ADD_TODO } from '../actions/types';

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
      console.log('payload123', action.payload)
      return {
        ...state,
        todos: action.payload
      }

    default:
    return state;
  }
}

