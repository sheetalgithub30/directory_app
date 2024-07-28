import React, { useEffect, useState } from 'react'
import Retrieve from './Retrieve';
import New from './New';
import './index.css'

function App() {
  const [value,setValue] = useState(false);
  return (<div>
        <h1 className='p-4 text-white text-center text-3xl bg-blue-800 w-screen'> Directory App</h1>
    <div className='flex justify-center align-center'>
      <button onClick={()=>setValue(false)} className=' p-3 bg-blue-700 m-3 text-md rounded-lg text-white '>Add New Person</button>
      <button onClick={()=>setValue(true)} className=' p-3 bg-blue-700 m-3 text-md rounded-lg text-white'>Retrive Information</button>
      </div>
      <div>

      {
       value ? (
       <Retrieve/>):(
        <New/>
       )
      }
      </div>
  
  </div>
  )
}

export default App