import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const TodoClearCompleted = (props) => {
  return (
    <motion.button
      className="border text-white text-sm rounded-md px-1 md:px-2 shadow-lg py-1"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.97 }}
      onClick={props.clearCompleted}
    >
      Clear complete
    </motion.button>
  );
};

export default TodoClearCompleted;

TodoClearCompleted.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
};
