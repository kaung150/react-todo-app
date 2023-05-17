import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import NoTodo from "./NoTodo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import { TodosContext } from "./context/todosContext";

export const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Finished React Series",
  //     isComplete: false,
  //     isEditing: false,
  //   },

  //   {
  //     id: 2,
  //     title: "Go Grocery",
  //     isComplete: true,
  //     isEditing: false,
  //   },

  //   {
  //     id: 3,
  //     title: "Take over world",
  //     isComplete: false,
  //     isEditing: false,
  //   },
  // ]);

  // const [idForTodo, setIdForTodo] = useState(4);
  const [idForTodo, setIdForTodo] = useLocalStorage("idForTodo", 1);
  const nameInputEl = useRef(null);
  const [name, setName] = useLocalStorage("name", "");
  const [filter, setFilter] = useState("all");

  function todosFiltered() {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  }

  useEffect(() => {
    nameInputEl.current.focus();
    // setName(JSON.parse(localStorage.getItem("name")) ?? "");
    // return function cleanup() {
    //   console.log("cleaning up");
    // };
  }, []);

  function handleNameInput(event) {
    setName(event.target.value);
    // localStorage.setItem("name", JSON.stringify(event.target.value));
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        idForTodo,
        setIdForTodo,
        todosFiltered,
        filter,
        setFilter,
      }}
    >
      <div className=" h-full w-full absolute">
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-12 border px-8 py-10 bg-indigo-500 rounded-lg">
          <div className="">
            <div>
              <h2 className="text-white text-2xl mb-3 font-bold">
                What is your name?
              </h2>

              <form action="">
                <motion.input
                  type="text"
                  className="py-1 w-full px-2 mb-2 outline-none rounded-md shadow-lg hover:shadow-xl text-gray-500"
                  placeholder="What is your name?"
                  whileHover={{ scale: 1.06 }}
                  value={name}
                  onChange={handleNameInput}
                  ref={nameInputEl}
                />
              </form>
              {name && <p className="mb-4 text-white text-lg">Hello, {name}</p>}
            </div>

            <h1 className="mb-3 text-white font-bold text-2xl mt-4">
              Todo APP
            </h1>
            <TodoForm />
          </div>

          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <div className="mt-5 container">
              <p className="text-lg text-indigo-200">Add some todo...</p>
              <motion.div
                className="flex justify-center  "
                whileHover={{ scale: 1.1 }}
              >
                <NoTodo />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </TodosContext.Provider>
  );
};

export default App;
