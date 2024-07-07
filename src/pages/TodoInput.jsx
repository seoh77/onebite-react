import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { add_todo } from '../commons/actions';

function TodoInput() {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleClick = () => {
    const todo = {
      title: text,
      isComplete: false,
    };

    dispatch(add_todo(todo));
    setText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <div className="mb-5">
        <input
          type="text"
          name=""
          id=""
          className="border-solid border-b-2 border-gray-600"
          placeholder="할 일을 입력해주세요."
          onChange={handleChange}
          value={text}
          onKeyDown={handleKeyPress}
        />
        <button className="ml-3" onClick={handleClick}>
          등록
        </button>
      </div>
    </>
  );
}

export default TodoInput;
