import React from "react";
import { render } from "react-dom";
import data from "../data/data";

function Checkifdataisempty(props){
     if (data[props.tasknum]==null){
          return <div>
                    <h2 id='tasksdone'>Looks like you've completed all the tasks!</h2>
               </div>
     }
     else return   <div id='render'>
          
          <h2>{data[props.tasknum].name}</h2>
          <h3 id='task' className=''>{data[props.tasknum].task}</h3>

     </div>
     
     }


export default Checkifdataisempty;

