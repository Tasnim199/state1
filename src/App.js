
import './App.css';
import { useState } from 'react';
function App(){
    const[ text,setText ]= useState("");
    const[ showOutput,setshowOutput ]= useState("false");
    return (
    
    <div className="App" >
  <input 
  type="text" 
  placeholder="write you full name"
  onChange={(e)=> setText (e.target.value)}
/>
<input 
  type="text" 
  placeholder="profession"
  onChange={(e)=> setText (e.target.value)}
/>
<input 
  type="text" 
  placeholder="write your bio "
  onChange={(e)=> setText (e.target.value)}
/>

    <img src='https://tse1.mm.bing.net/th?id=OIP.z3PZGPQAUo12rYahP79C6wHaE8&pid=Api&rs=1&c=1&qlt=95&w=141&h=94' alt='..'></img> 
    <button onClick={()=>setshowOutput(true)}> Click to show  </button>
    <h1> Profile : { setshowOutput ? text : " "}</h1>
    </div>
  );

  

}

export default App;
