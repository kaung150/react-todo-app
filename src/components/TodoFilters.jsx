import React from 'react';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';

export const TodoFilters = (props) => {
  return (
    <div className='flex  gap-2'>
                
              <motion.button className={`text-white  px-1 ${props.filter === 'all'? 'border' : ''}`}
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
                 onClick={() => {
                    props.setFilter('all')
                    props.todosFiltered('all')
                 }}
              
              >All</motion.button>
             <motion.button className={`text-white  px-1 ${props.filter === 'active'? 'border' : ''}`}
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
                 onClick={() => {
                    props.setFilter('active')
                    props.todosFiltered('active')
                 }}
              
              >Active</motion.button>
              <motion.button className={`text-white  px-1 ${props.filter === 'completed'? 'border' : ''}`}
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.97 }}
                 onClick={() => {
                    props.setFilter('completed')
                    props.todosFiltered('completed')
                 }}
              >Completed</motion.button>
          </div>
  )
}

export default TodoFilters;

TodoFilters.propTypes = {
    todosFiltered: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}
