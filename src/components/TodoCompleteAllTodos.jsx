import React, { useContext } from "react";
import { motion } from "framer-motion";
import { TodosContext } from "../context/todosContext";

export const TodoCompleteAllTodos = () => {
  const { todos, setTodos } = useContext(TodosContext);

  function completeAllTodos() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;

      return todo;
    });

    setTodos(updatedTodos);
  }
  return (
    <motion.button
      className="px-3 py-1 border rounded-md shadow-lg border-white text-sm hover:shadow-lg"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.97 }}
      onClick={completeAllTodos}
    >
      Check All
    </motion.button>
  );
};

export default TodoCompleteAllTodos;
