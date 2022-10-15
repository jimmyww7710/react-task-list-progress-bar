import { useState } from 'react';
import { StyledTask } from '../style/task.styled' 
import Details from './details'

function Task({title, startDate, endDate, items, order}) {
    const[taskTitle, setTaskTitle] = useState(title);
    const updateTitle = function(e) {
        setTaskTitle(e.target.value);
    }

    const[taskStartDate, setTaskStartDate] = useState(startDate);
    const updateStartDate = function(e) {
        setTaskStartDate(e.target.value);
    }

    const[taskEndDate, setTaskEndDate] = useState(endDate);
    const updateTaskEndDate= function(e) {
        setTaskEndDate(e.target.value);
    }
    
    
    return (
      <StyledTask> 
        <h2>Task {order}</h2>
        <input type="text" value={taskTitle} onChange={updateTitle} />
        <input type="date" value={taskStartDate} onChange={updateStartDate}></input>
        <input type="date" value={taskEndDate} onChange={updateTaskEndDate}></input>
        <p>details:</p>
        {items.map((item) => {
            const {id, name, days} = item;
          return <Details key={id} name={name} days={days} ></Details>
        })}
        
      </StyledTask>
    );
  }
  
  export default Task;
  