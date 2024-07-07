import React from 'react';

import { useDispatch } from 'react-redux';

import { delete_todo, check_todo } from '../commons/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const { id, isComplete } = todo;
  const title = todo.todo;

  const handleClick = () => {
    dispatch(delete_todo(id));
  };

  const handleCheckClick = () => {
    dispatch(check_todo(id));
  };

  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          name=""
          id=""
          className="mr-3"
          checked={isComplete}
          onChange={handleCheckClick}
        />
        <div className="mr-5">{title}</div>
        <div onClick={handleClick}>X</div>
      </div>
    </>
  );
};

export default TodoItem;
