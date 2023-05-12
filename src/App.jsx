import React, { useState } from 'react'
import {motion} from 'framer-motion'
import NoTodo from './NoTodo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finished React Series',
      isComplete: false,
      isEditing: false
    },

    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false
    },

    {
      id: 3,
      title: 'Take over world', 
      isComplete: false,
      isEditing: false
    }
  ]);

  
  const [idForTodo, setIdForTodo] = useState(4);



  const addTodo = (todo) => {
    

    setTodos([...todos, {
      id: idForTodo,
      title: todo,
      isComplete: false
    }]);

   

    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  } 

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }

      return todo;

      
    });

    setTodos(updatedTodos);
  }

  const markAsEditing = (id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isEditing = true;
      }

      return todo;

      
    });

    setTodos(updatedTodos);
  }

 


  const updateTodo = (event,id) => {
 
    const updatedTodos = todos.map(todo => {
    
    if(event.target.value.trim().length === 0){
      todo.isEditing = false;
      return todo;
    }

      if(todo.id === id){
        todo.title = event.target.value
        todo.isEditing = false;
      }

      return todo;

      
    });

    setTodos(updatedTodos);
  }

  const cancelEdit = (event, id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isEditing = false;
      }

      return todo;

      
    });

    setTodos(updatedTodos);
  }

 

  return (
    <div className=' h-full w-full absolute'>

      <div className='max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-12 border px-8 py-10 bg-indigo-500'>
        <div className="">
          <h1 className='mb-3 text-white font-bold text-2xl'>Todo App</h1>
          <TodoForm  addTodo={addTodo}/>
        </div>

        {todos.length > 0 ? (
     <TodoList 
        todos={todos} 
        completeTodo={completeTodo}  
        markAsEditing={markAsEditing}
        updateTodo={updateTodo}
        cancelEdit={cancelEdit}
        deleteTodo={deleteTodo}
        
        /> ) : (
          <div className="mt-5 container">
              <p className='text-lg text-indigo-200'>Add some todo...</p>
            <div className='flex justify-center '>
              <NoTodo/>
            </div>
          </div>
        ) }              
      </div>

    </div>
  )
}


export default App;