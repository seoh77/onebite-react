import TodoInput from './TodoInput.jsx';
import TodoItem from './TodoItem.jsx';

import { useSelector } from 'react-redux';

function Main() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="p-10">
        <h1 className="text-xl mb-3 text-blue-500 font-semibold">Todos</h1>
        <div className="mb-5">
          {year}년 {month}월 {day}일
        </div>
        <TodoInput />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default Main;
