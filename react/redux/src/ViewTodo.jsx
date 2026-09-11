import React from 'react'
import { useSelector } from "react-redux";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTodo;
