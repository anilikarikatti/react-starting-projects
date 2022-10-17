// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

/*
function Counter({count,onclick,chbg,bgColor}){
  console.log(bgColor);
  return(
    <>
      <p>welcome to automatic counter</p>
      <p onClick={chbg} style={{backgroundColor:((bgColor)?'red':'green'), color:(bgColor)? 'black':'yellow'}} >{count}</p>
      <button className='btn' onClick={onclick}>start</button>
    </>
  )
}*/
function App() {
/*
  const [count,incCount] = useState(0);
  function increment(){
    incCount(count+1);
  }

  const[bgColor,changeBg] = useState(false)
  // console.log(bgColor);
  function changeColor(){
    if(!bgColor){
      changeBg(true)
    }
    else{
      changeBg(false)
    }
  }


  console.log("app called");
  return (
    <>
    <p className='red'> hello world</p>
    <Counter count = {count} onclick={increment} chbg={changeColor} bgColor={bgColor}/>
    </>
        )
*/
    let rows =[]
      function onclick(){
        console.log("btn clicked");
        console.log(rows);

        rows.push(<CreateTextSpace key = {'1'} onclick={onclick}/>)    
      }
    return(
      <div>
      <p className='todo'>welcome to todo list</p>
      <CreateTextSpace onclick={onclick}/>
      {rows}
      </div>
    )
}


function CreateTextSpace({onclick}){
  return(
    <div className='para'>
    <input type="text" className='field' style={{height:'30px',width:'300px'}}/>
    <button  className = 'btn' onClick={onclick}>submit</button>
    </div>
  )
}

export default App;
