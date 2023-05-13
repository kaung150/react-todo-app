import React, { useState } from 'react';
import {motion} from 'framer-motion';
import TodoForm from './TodoForm';
import {TodoItemsRemaining} from './TodoItemsRemaining';
import PropTypes from 'prop-types';
import TodoClearCompleted from './TodoClearCompleted';
import TodoCompleteAllTodos from './TodoCompleteAllTodos';
import TodoFilters from './TodoFilters';



TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    todosFiltered: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    markAsEditing: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    remaining: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    completeAllTodos: PropTypes.func.isRequired,
    
}

export default function TodoList(props) {

  const [filter, setFilter] = useState('all'); 

  return (
     <div>
        { props.todosFiltered(filter).map((todo, index) => (
          
          <div key={todo.id} className="flex justify-between mt-6">
            <div className='flex justify-between gap-4'>
                <motion.input type="checkbox" className='w-5' onChange={() => props.completeTodo(todo.id)} checked={todo.isComplete ? true : false}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.97 }}
                /> 

                { !todo.isEditing ? (  
                  <label htmlFor="" className={`text-white ${todo.isComplete ? 'line-through' : ''}`} onDoubleClick={() => props.markAsEditing(todo.id)}>{todo.title}</label> ) : (   
                  <input type="text" className='todo-item-input outline-none 
                  isEditing: false px-1' autoFocus defaultValue={todo.title} onBlur={(event) => props.updateTodo(event,todo.id)} onKeyDown={event => {
                    if(event.key === 'Enter'){
                      props.updateTodo(event,todo.id)
                    } else if(event.key === 'Escape'){
                      cancelEdit(event, todo.id)
                    }
                  }} /> 
                )}             
            </div>

              <motion.button className='border px-2 text-white hover:border-3'
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => props.deleteTodo(todo.id)} 
              
              >X</motion.button> 
          
        </div>  ))}

      

        <hr className='mt-4'/>

        <div className='flex justify-between text-white mt-3 items-center'>
          <TodoCompleteAllTodos completeAllTodos={props.completeAllTodos}/>
          <TodoItemsRemaining remaining={props.remaining}/>
        </div>

        <hr className='mt-3'/>

        <div className='mt-3 flex justify-between items-center  '>
          
          <TodoFilters 
            todosFiltered={props.todosFiltered}
            filter={filter}
            setFilter={setFilter}
          
          />
          
          <TodoClearCompleted clearCompleted={props.clearCompleted}/>
        </div>

        </div>
  )
}

