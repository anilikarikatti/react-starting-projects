import React from "react";
import {useState} from 'react'
 
function Calculator(){
  
    let buttons=[1,2,3,4,5,6,7,8,9,0,'+','-','*','/'];

    let [output,setOutput] = useState("");

    // const [str,setStr] = useState("");
    // let str=0;
    // console.log(str);
    function printData(){
        // console.log(str);
        setOutput(eval(output))
    }

    function cancelTotext(){
        setOutput("")
    }
        function funVal(event){
            let val = event.target.value;
            output+=val;
            // console.log(output);
            setOutput(output)
        }
// console.log(str);
    return(
        <>
            <div className="para" style={{textAlign:"center",marginTop:'100px',marginBottom:'100px'}}>{output}</div>

            <div className="output" style={{display:'grid',marginLeft:'200px',
            gridTemplateColumns:"3fr 3fr 3fr"
        }}>

            {
                buttons.map(elem=>{
                    return (
                        <div key={elem}  style={{marginTop:'20px'}}>
                            <button   onClick={funVal} className="btn" key = {elem} value={elem}>{elem}</button>
                            </div>
                    )
                })
            }
            </div>

            <div className="ans" style={{marginLeft:'910px',
        marginTop:'-20px'}}>
                <button onClick={printData}>ans</button>

            </div>

            <div className="ans" style={{marginLeft:'920px',
        marginTop:'-250px'}}>
                <button onClick={cancelTotext}>ac</button>

            </div>


        </>
    )
}

function App(){
    return (
    
    <Calculator/>

    )
}


export default App;