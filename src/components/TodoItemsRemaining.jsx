import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { TodosContext } from "../context/todosContext";

export const TodoItemsRemaining = () => {
  const { todos } = useContext(TodosContext);
  function remainingCalculation() {
    // console.log("calculating remaining todos. this is slow");
    // for (let index = 0; index < 200000000; index++) {}
    return todos.filter((todo) => !todo.isComplete).length;
  }

  const remaining = useMemo(remainingCalculation, [todos]);

  return <span>{remaining} items remaining</span>;
};

export default TodoItemsRemaining;
