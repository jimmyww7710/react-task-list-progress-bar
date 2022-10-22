import { useState } from 'react';
import StyledTask from '../style/task.styled';

function Task({ title, startDate, endDate, datails, id, clickDeleteButtonHandler }) {
  let wholeDays = 0;
  let progressPercent = 0;
  const updateWholeDays = function (startDate, endDate) {
    const _startDate = new Date(startDate);
    const _endDate = new Date(endDate);
    wholeDays = Math.ceil((_endDate - _startDate) / (1000 * 60 * 60 * 24)) + 1;
    const passedDays = Math.ceil(((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24)));
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
    if (new Date(e.target.value) < new Date(taskEndDate)) {
      setTaskStartDate(e.target.value);
      updateWholeDays(taskStartDate, taskEndDate);
    }
    else {
      console.log('Ended Date should be later than Started Date');
    }
  };

  const updateTaskEndDate = function (e) {
    console.log(new Date(e.target.value), taskStartDate);
    if (new Date(e.target.value) > new Date(taskStartDate)) {
      setTaskEndDate(e.target.value);
      updateWholeDays(taskStartDate, taskEndDate);
    }
    else {
      console.log('Started Date should be earlier than Ended Date');
    }
  };
  return (
    <StyledTask>
      <div className="flex-container two-reverse">
        <div className="form-input-area">
          <div className="flex-container">
            Task:
            <input type="text" value={taskTitle} onChange={updateTitle} />
          </div>
          <br />
          <div className="flex-container">
            start from:
            <input type="date" value={taskStartDate} onChange={updateStartDate} />
          </div>
          <br />
          <div className="flex-container">
            ended at:
            <input type="date" value={taskEndDate} onChange={updateTaskEndDate} />
          </div>
          <br />
        </div>
        <div className="display-area">
          <div className="progress-bar">
            <div className="current-progress-percentage" style={{ width: ((!taskStartDate || !taskEndDate) ? 0 : progressPercent) + '%' }}>
              <span>
                {
                  ((!taskStartDate || !taskEndDate) ? 0 : progressPercent) + '%'
                }
              </span>
            </div>
          </div>
          <button
            class="reverse-color"
            type="button"
            onClick={() => {
              clickDeleteButtonHandler(id);
            }}
          >
            delete -
          </button>
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
