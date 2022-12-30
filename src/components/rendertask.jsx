import React from "react";
import data from "../data/data";


function RenderTask(props) {
     return   <div id='render'>
          <h2>{data[props.tasknum].name}</h2>
          <h3 id='task' className=''>{data[props.tasknum].task}</h3>
          {/* <ul>
          <li id='category'>Category:</li>
          <ul>
               <li>{data[props.tasknum].tags}</li>
          </ul>
          </ul> */}

     </div>
}



export default RenderTask;