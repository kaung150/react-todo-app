import React, { useState } from 'react'
import { AnotherComponent } from './AnotherComponent';

export const App = () => {

  const [count, setCount] = useState(0);

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  const someStyle ={
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
  }

  return (
    <div>

      <div className='ms-10 mt-10'>
        <AnotherComponent name="Kaung Min Khant"/>
        <button className='px-2 rounded text-white bg-green-500' onClick={decrement}>-</button>
          <span>{count}</span>
        <button className='px-2 rounded text-white bg-green-500' onClick={increment}>+</button>
      </div>


    </div>
  )
}


export default App;