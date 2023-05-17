import React, { useContext } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { TodosContext } from "../context/TodosContext";

export const TodoClearCompleted = () => {
  const { todos, setTodos } = useContext(TodosContext);

  function clearCompleted() {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  }

  return (
    <motion.button
      className="border text-white text-sm rounded-md px-1 md:px-2 shadow-lg py-1"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.97 }}
      onClick={clearCompleted}
    >
      Clear complete
    </motion.button>
  );
};

export default TodoClearCompleted;
