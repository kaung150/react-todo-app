import React, { useContext } from "react";
import { motion } from "framer-motion";
import TodoForm from "./TodoForm";
import { TodoItemsRemaining } from "./TodoItemsRemaining";

import TodoClearCompleted from "./TodoClearCompleted";
import TodoCompleteAllTodos from "./TodoCompleteAllTodos";
import TodoFilters from "./TodoFilters";
import useToggle from "../hooks/useToggle";
import { TodosContext } from "../context/TodosContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function TodoList() {
  const { todosFiltered, filter, todos, setTodos } = useContext(TodosContext);

  const [isFeaturesOneVisible, setFeaturesOneVisible] = useToggle();
  const [isFeaturesTwoVisible, setFeaturesTwoVisible] = useToggle();

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const markAsEditing = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (event, id) => {
    const updatedTodos = todos.map((todo) => {
      if (event.target.value.trim().length === 0) {
        todo.isEditing = false;
        return todo;
      }
      if (todo.id === id) {
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const cancelEdit = (event, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <TransitionGroup component="div">
        {todosFiltered(filter).map((todo, index) => (
          <CSSTransition
            key={todo.id}
            timeout={300}
            classNames="slide-horizontal"
          >
            <div className="flex justify-between mt-6">
              <div className="flex justify-between gap-4">
                <motion.input
                  type="checkbox"
                  className="w-5"
                  onChange={() => completeTodo(todo.id)}
                  checked={todo.isComplete ? true : false}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.97 }}
                />

                {!todo.isEditing ? (
                  <label
                    htmlFor=""
                    className={`text-white ${
                      todo.isComplete ? "line-through" : ""
                    }`}
                    onDoubleClick={() => markAsEditing(todo.id)}
                  >
                    {todo.title}
                  </label>
                ) : (
                  <input
                    type="text"
                    className="todo-item-input outline-none 
                  isEditing: false px-1"
                    autoFocus
                    defaultValue={todo.title}
                    onBlur={(event) => updateTodo(event, todo.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateTodo(event, todo.id);
                      } else if (event.key === "Escape") {
                        cancelEdit(event, todo.id);
                      }
                    }}
                  />
                )}
              </div>

              <div className="flex gap-2">
                <motion.button
                  className="border px-2 text-white hover:border-3 text-sm rounded-md
            hover:border-2 hover:shadow-lg "
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => markAsEditing(todo.id)}
                >
                  E
                </motion.button>

                <motion.button
                  className="border px-2 text-white hover:border-3 text-sm rounded-md
            hover:border-2 hover:shadow-lg "
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => deleteTodo(todo.id)}
                >
                  X
                </motion.button>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div className=" flex gap-2 mt-5">
        <motion.button
          className="text-white text-sm border rounded-md px-2 py-1 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          onClick={setFeaturesOneVisible}
        >
          Features One Toggle
        </motion.button>
        <motion.button
          className="text-white text-sm border rounded-md px-2 py-1 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          onClick={setFeaturesTwoVisible}
        >
          Features Two Toggle
        </motion.button>
      </div>

      <hr className="mt-2" />

      <CSSTransition
        in={isFeaturesOneVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="flex justify-between text-white mt-3 items-center">
          <TodoCompleteAllTodos />
          <TodoItemsRemaining />
        </div>
      </CSSTransition>

      {isFeaturesOneVisible && <hr className="mt-3" />}

      <CSSTransition
        in={isFeaturesTwoVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="mt-3 flex justify-between items-center  ">
          <TodoFilters />

          <TodoClearCompleted />
        </div>
      </CSSTransition>
    </>
  );
}
