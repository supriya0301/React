import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter]= useState(15)

//let counter=15
const addValue=()=>{
  //console.log("clicked",counter);
  //counter=counter+1
  // if(counter<20)
  // setCounter(counter+1)

  //counter=counter+1

//setCounter(counter+1)
//setCounter(counter+1)
//setCounter(counter+1)

//setCounter(counter+1)



setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)

}


const removeValue=()=>{
  if(counter>0){   
  setCounter(counter-1)
  }
}

  return (
    <>
        <h1>React and Javascript</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Add value {counter}</button>
        <br/>
        <br/>
        <button onClick={removeValue}>Remove value {counter}</button>
        <p>footer:  {counter}</p>
    </>
  )
}

export default App


/*
Here's a summary of the key points:

State: You're using the useState hook to declare a state
 variable counter initialized with the value 15. 
 The setCounter function is then used to update the state.

Event Handlers: You've defined two functions, 
addValue and removeValue, which are called 
when the respective buttons are clicked. 
These functions use setCounter to update the 
state and trigger a re-render.

JSX: The return statement contains JSX code tha
t renders HTML elements. The value of the counter 
state is displayed, and two buttons trigger the 
corresponding functions to modify the state.

CSS and Image Imports: You're importing CSS styles 
and two image files (reactLogo and viteLogo).
 Make sure the file paths are correct for your
  project structure.

Overall, your component appears to be a simple
 counter app in React. When the "Add value" button
  is clicked, the counter increments, and when the 
  "Remove value" button is clicked, the counter decrements. 
  The current value of the counter is displayed in 
  the heading and footer.

*/





