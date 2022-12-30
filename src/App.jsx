import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data/data'
import RenderTask from './components/rendertask'

function App() {
  const [tasknum,setTaskNum]=useState(0);
  // function undoStrike() {
  //   document.getElementById('task').style.textDecoration = "none";
  // }
  function newTask(){
    setTaskNum(currenttasknum=>currenttasknum+1);
    console.log(tasknum);
    // toggleStrike();
    var element = document.getElementById("task");
    element.className='';
    var button=document.getElementById('done');
    button.innerText='Mark as done';
    // element.classList.toggle("strikethrough");
    
}
function toggleStrike() {
  // var button=document.getElementById('done');
  // button.innerText='undo';
  var element = document.getElementById("task");
  element.classList.toggle("strikethrough");
}
  // function strike(){
    
  //   //document.getElementById('task').style.textDecoration = "line-through";
  //   // document.getElementsByClassName('task').className='strikethrough';
  //   ();
  // }
  return (
    <div className="App">
      <h1>Yellow Ocean</h1>
      <h2>Today's task is: </h2>
      <RenderTask tasknum={tasknum}/>
      <button id='done' onClick={toggleStrike}>Mark as done</button>

      <button id='newt' onClick={newTask}>Get new task!</button>
      <p>
        Enjoying this app? Share about it on <a href='https://twitter.com'>Twitter</a>
      </p>
    </div>
  )
}

export default App
