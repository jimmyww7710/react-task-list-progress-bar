import { useState } from 'react';
import { StyledTask } from '../style/task.styled';
// import Details from './details'

function Task({ title, startDate, endDate, datails }) {
  let wholeDays = 0;
  let progressPercent = 0;
  const currentDate = new Date();
  const passedDays = Math.ceil(((currentDate - new Date(startDate)) / (1000 * 60 * 60 * 24)));

  const updateWholeDays = function (startDate, endDate) {
    const _startDate = new Date(startDate);
    const _endDate = new Date(endDate);
    wholeDays = Math.ceil((_endDate - _startDate) / (1000 * 60 * 60 * 24)) + 1;
    progressPercent = Math.floor((passedDays / wholeDays) * 100);
    progressPercent = progressPercent > 100 ? 100 : progressPercent;
  };

  const [taskTitle, setTaskTitle] = useState(title);
  const [taskStartDate, setTaskStartDate] = useState(startDate);
  const [taskEndDate, setTaskEndDate] = useState(endDate);
  const [IsShowDetails, switchIsShowDetails] = useState(false);

  const updateTitle = function (e) {
    setTaskTitle(e.target.value);
  };

  updateWholeDays(taskStartDate, taskEndDate);
  const updateStartDate = function (e) {
    if (new Date(e.target.value) < taskEndDate) {
      setTaskStartDate(e.target.value);
      updateWholeDays(taskStartDate, taskEndDate);
    }
    else {
      console.log('Ended Date should be later than Started Date');
    }
  };

  const updateTaskEndDate = function (e) {
    if (new Date(e.target.value) > taskStartDate) {
      setTaskEndDate(e.target.value);
      updateWholeDays(taskStartDate, taskEndDate);
    }
    else {
      console.log('Started Date should be earlier than Ended Date');
    }
  };
  return (
    <StyledTask>
      <div class="flex-container">

        <div>
          <input type="text" value={taskTitle} onChange={updateTitle} />
          <br />
          <input type="date" value={taskStartDate} onChange={updateStartDate} />
          <br />
          <input type="date" value={taskEndDate} onChange={updateTaskEndDate} />
          <br />
        </div>

        <div>
          <p>
            {
              (!taskStartDate || !taskEndDate) ? '' : progressPercent + '%'
            }
          </p>
        </div>
      </div>

      add details:
      {' '}
      <input type="checkbox" onChange={() => switchIsShowDetails(!IsShowDetails)} />
      <br />
      {
        IsShowDetails ? <textarea>{datails}</textarea> : ''
      }

    </StyledTask>
  );
}

export default Task;
