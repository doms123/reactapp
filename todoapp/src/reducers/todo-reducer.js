import { FETCH_TODOS, UPDATE_TODO, ADD_TODO, FETCH_TODO, FETCH_TODO_SINGLE, UPDATE_SAVE_TODO } from '../actions/types';

const initialState = {
  all: []
};
export default (state = initialState, action) => {
  switch(action.type) {

    case FETCH_TODOS : 
      return {
        ...state,
        all: action.payload
      }

    case UPDATE_TODO:
      return {
        ...state,
        single: {
          ...state.single,
          ...action.payload
        }
      }

    case ADD_TODO :
      return {
        ...state,
        all: [...state.all, action.payload]
      }

    case FETCH_TODO_SINGLE:
      return {
        ...state,
        single: action.payload
      }

    case FETCH_TODO :
      return {
        ...state,
        all: action.payload
      }

    case UPDATE_SAVE_TODO : 
      return {
        ...state,
        ...state.all.splice(state.single.id - 1, 1),
        all: [...state.all, action.payload]
      }

    default:
    return state;
  }
}

