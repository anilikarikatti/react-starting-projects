

import './App.css';
import {useState} from 'react'

// components





function App(){

  return(
    <div className='main-div'>
      <InputBox />
    </div>
  )
}



function InputBox(){

  
  const[items,setItems] = useState([])

  const [input,setInput] = useState("");

  const addItems = ()=>{
    setItems(
      [...items,input]
    );
    setInput("")
  }

  console.log(items);
  return (
    <>
      <div className='inp-main'>
        <input type='text' className='inp' placeholder='enter yourr task' onChange={(event)=>setInput(event.target.value)} value = {input} ></input>
        <button className='btn' onClick={addItems}>submit</button>
      </div>
      {/* {console.log(typeof(items))}  */}
      <div className='show-items'>
        {
          items.map((elem,index)=>{
            return <div className='items' key = {index}>{elem}</div>
            

          })}
      </div>
    </>
  )
}


export default App;