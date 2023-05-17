import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import NoTodo from "./NoTodo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finished React Series",
      isComplete: false,
      isEditing: false,
    },

    {
      id: 2,
      title: "Go Grocery",
      isComplete: true,
      isEditing: false,
    },

    {
      id: 3,
      title: "Take over world",
      isComplete: false,
      isEditing: false,
    },
  ]);

  const [idForTodo, setIdForTodo] = useState(4);
  const nameInputEl = useRef(null);
  const [name, setName] = useState("");

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todo,
        isComplete: false,
      },
    ]);

    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
  };

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

  function remaining() {
    // console.log("calculating remaining todos. this is slow");
    // for (let index = 0; index < 200000000; index++) {}
    return todos.filter((todo) => !todo.isComplete).length;
  }

  // const remaining = useMemo(remainingCalculation, [todos]);

  function clearCompleted() {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  }

  function completeAllTodos() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;

      return todo;
    });

    setTodos(updatedTodos);
  }

  function todosFiltered(filter) {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  }

  useEffect(() => {
    console.log("use effect running");

    nameInputEl.current.focus();

    // return function cleanup() {
    //   console.log("cleaning up");
    // };
  }, []);

  return (
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
                className="py-1 w-full px-1 mb-2 outline-none rounded-md shadow-lg hover:shadow-xl"
                placeholder="What is your name?"
                whileHover={{ scale: 1.06 }}
                value={name}
                onChange={(event) => setName(event.target.value)}
                ref={nameInputEl}
              />
            </form>
            {name && <p className="mb-4 text-white text-lg">Hello, {name}</p>}
          </div>

          <h1 className="mb-3 text-white font-bold text-2xl mt-4">Todo APP</h1>
          <TodoForm addTodo={addTodo} />
        </div>

        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
            remaining={remaining}
            clearCompleted={clearCompleted}
            completeAllTodos={completeAllTodos}
            todosFiltered={todosFiltered}
          />
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
  );
};

export default App;
