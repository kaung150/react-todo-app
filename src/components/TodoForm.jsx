import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import { TodosContext } from "../context/todosContext";

export default function TodoForm() {
  const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);
  const [todoInput, setTodoInput] = useState("");

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);

    setTodoInput("");
  }

  return (
    <form action="#" onSubmit={addTodo}>
      <motion.input
        type="text"
        className=" px-2 text-gray-500 py-1 border w-full outline-none shadow-lg rounded-md"
        placeholder="What do you need to do?"
        whileHover={{ scale: 1.06 }}
        value={todoInput}
        onChange={handleInput}
      />
    </form>
  );
}
