import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default function TodoForm(props) {
  const [todoInput, setTodoInput] = useState("");

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    props.addTodo(todoInput);

    setTodoInput("");
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
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
