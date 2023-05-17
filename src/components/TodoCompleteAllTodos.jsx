import React from "react";
import { motion } from "framer-motion";

export const TodoCompleteAllTodos = (props) => {
  return (
    <motion.button
      className="px-3 py-1 border rounded-md shadow-lg border-white text-sm hover:shadow-lg"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.97 }}
      onClick={props.completeAllTodos}
    >
      Check All
    </motion.button>
  );
};

export default TodoCompleteAllTodos;
