import React, { useState } from 'react'

export const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finished React Series',
      isComplete: false,
    },

    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
    },

    {
      id: 1,
      title: 'Take over world',
      isComplete: false,
    }
  ]);

  return (
    <div className=' h-full w-full absolute'>

      <div className='max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-12 border px-8 py-10 bg-green-400'>
        <div className="">
          <h1 className='mb-3 text-white font-bold text-2xl'>Todo App</h1>
          <input type="text" className=' px-1 py-1 border w-full outline-none shadow-lg' placeholder='What do you need to do?' />  
        </div>

       { todos.map((todo, index) => (
        
        <div className="flex justify-between mt-6">
          <div className='flex justify-between gap-4'>
              <input type="checkbox" /> 
              <label htmlFor="" className='text-white'>{todo.title}</label>
                    
            </div>

            <button className='border px-2 text-white'>X</button> 
        
        </div>  ))}


        <hr className='mt-4'/>

        <div className='flex justify-between text-white mt-3 items-center'>
          <button className='px-3 py-1 border border-white text-sm '>Check All</button>
          <p>3 items remaining</p>
        </div>

        <hr className='mt-3'/>

        <div className='mt-3 flex justify-between items-center  '>
          <div className='flex  gap-2'>
                
              <button className='text-white  px-1 border'>All</button>
              <button className='text-white  px-1 '>Active</button>
              <button className='text-white  px-1 '>Completed</button>
          </div>
          
          <button className='border text-white px-1'>Clear completed</button>
        </div>


      </div>

    </div>
  )
}


export default App;