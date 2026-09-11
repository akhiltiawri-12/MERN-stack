import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = inputText.trim();
    if (!text) return;

    dispatch(addTodo({ text }));
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
