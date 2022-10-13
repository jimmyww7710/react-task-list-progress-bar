import { useState } from 'react';
import { StyledTask } from '../style/task.styled' 

function Task({title, startDate, endDate}) {
    const [taskTitle, setTitle] = useState(title)
    function titleChange(e) {
        setTitle(e.target.value)
    }

    const [taskStartDate, setStartDate] = useState(startDate)
    function startDateChange(e) {
        setStartDate(e.target.value)
    }

    const [taskEndDate, setEndDate] = useState(endDate)
    function endDateChange(e) {
        setEndDate(e.target.value)
    }
    return (
      <StyledTask id="task-container"> 
        <div>
            Task Name: <input type="text" value={taskTitle} onChange={titleChange} />
            Start Date: <input type="date" value={taskStartDate} onChange={startDateChange} />
            End Date <input type="date" value={taskEndDate} onChange={endDateChange} />
        </div>
        <div>
            <p>detail:</p>
        </div>
      </StyledTask>
    );
  }
  
  export default Task;
  