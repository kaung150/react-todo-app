import React, { useContext } from "react";
import { motion } from "framer-motion";

import { TodosContext } from "../context/TodosContext";

export const TodoFilters = () => {
  const { filter, setFilter, todosFiltered } = useContext(TodosContext);

  return (
    <div className="flex  gap-2">
      <motion.button
        className={`text-white text-sm rounded-md  px-2 py-1 shadow-sm ${
          filter === "all" ? "border" : ""
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          setFilter("all");
          todosFiltered();
        }}
      >
        All
      </motion.button>
      <motion.button
        className={`text-white text-sm rounded-md  px-2 py-1 shadow-sm ${
          filter === "active" ? "border" : ""
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          setFilter("active");
          todosFiltered();
        }}
      >
        Active
      </motion.button>
      <motion.button
        className={`text-white text-sm rounded-md  px-2 py-1 shadow-sm ${
          filter === "completed" ? "border" : ""
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          setFilter("completed");
          todosFiltered();
        }}
      >
        Completed
      </motion.button>
    </div>
  );
};

export default TodoFilters;
