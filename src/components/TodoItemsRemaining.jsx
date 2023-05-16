import React from "react";
import PropTypes from "prop-types";

export const TodoItemsRemaining = (props) => {
  return <span>{props.remaining()} items remaining</span>;
};

export default TodoItemsRemaining;
TodoItemsRemaining.propTypes = {
  remaining: PropTypes.func.isRequired,
};
