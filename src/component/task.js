import { useState } from 'react';
import { StyledTask } from '../style/task.styled' 
import Details from './details'

function Task({title, startDate, endDate, items, order}) {
    let wholeDays = 0;
    let progressPercent = 0;
    const currentDate = new Date();
    const passedDays = Math.ceil(((currentDate - new Date(startDate)) / (1000 * 60 * 60 * 24)));
    
    const updateWholeDays = function(startDate, endDate) {
      const _startDate = new Date(startDate);
      const _endDate = new Date(endDate);
      wholeDays = Math.ceil((_endDate - _startDate) / (1000 * 60 * 60 * 24)) + 1;
      progressPercent = Math.floor((passedDays / wholeDays) * 100);
      progressPercent = progressPercent > 100 ? 100 : progressPercent;
    }

   
    const[taskTitle, setTaskTitle] = useState(title);
    const updateTitle = function(e) {
        setTaskTitle(e.target.value);
    }

    const[taskStartDate, setTaskStartDate] = useState(startDate);
    
    const[taskEndDate, setTaskEndDate] = useState(endDate);

    updateWholeDays(taskStartDate, taskEndDate);
    const updateStartDate = function(e) {
        if (new Date(e.target.value) < taskEndDate) {
          setTaskStartDate(e.target.value);
          updateWholeDays(taskStartDate, taskEndDate);
        }
        else {
          alert("Ended Date should be later than Started Date");
        }
        
    }

    const updateTaskEndDate= function(e) {
      if (new Date(e.target.value) > taskStartDate) {
        setTaskEndDate(e.target.value);
        updateWholeDays(taskStartDate, taskEndDate);
      }
      else {
        alert("Started Date should be earlier than Ended Date");
      }
    }
    
    
    return (
      <StyledTask> 
        <h2>Task {order}</h2>  {progressPercent} %
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
  