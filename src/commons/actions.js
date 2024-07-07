// action.js : action을 생성하고 해당 action이 어떤 일을 수행할지 지정한다.

export const ADD = 'ADD_TODO';
export const DELETE = 'DELETE_TODO';
export const CHECK = 'CHECK_TODO';

let id = 1;

export const add_todo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      isComplete: todo.isComplete,
    },
  };
};

export const delete_todo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const check_todo = (id) => {
  return {
    type: CHECK,
    id,
  };
};
