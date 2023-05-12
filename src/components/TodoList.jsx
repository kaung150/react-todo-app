import React from 'react';
import {motion} from 'framer-motion';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    completeTodo: PropTypes.func.isRequired,
    markAsEditing: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,

}

export default function TodoList(props) {
  return (
     <div>
        { props.todos.map((todo, index) => (
          
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
          <motion.button className='px-3 py-1 border border-white text-sm hover:shadow-lg'
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.97 }}
          
          >Check All</motion.button>
          <p>3 items remaining</p>
        </div>

        <hr className='mt-3'/>

        <div className='mt-3 flex justify-between items-center  '>
          <div className='flex  gap-2'>
                
              <motion.button className='text-white  px-1 border'
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
              
              >All</motion.button>
             <motion.button className='text-white  px-1 '
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
              
              >Active</motion.button>
              <motion.button className='text-white  px-1 '
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
              
              >Completed</motion.button>
          </div>
          
          <motion.button className='border text-white px-1 md:px-3 py-1'
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.97 }}
          
          >Clear completed</motion.button>
        </div>

        </div>
  )
}

