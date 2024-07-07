// reducer.js : action을 실행시킬 reducer / action 객체를 받아 state를 변경시킨다.

import { ADD, DELETE, CHECK } from './actions';

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      todos: [...state.todos, action.todo],
    };
  } else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo) => todo.id !== action.id)],
    };
  } else if (action.type === CHECK) {
    return {
      todos: state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      }),
    };
  } else {
    return state;
  }
};
