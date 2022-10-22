import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledList } from '../style/list.styled';
import Task from './task';

function List({ taskData }) {
  const [tempTaskData, setTempTaskData] = useState(taskData);
  const add = function () {
    return setTempTaskData((preTaskData) => [
      ...preTaskData,
      {
        id: uuidv4(), // 自動產生一組新的id
        title: '',
        startDate: '',
        endDate: '',
        details: '',
      },
    ]);
  };

  const clickDeleteButtonHandler = (id) => {
    return setTempTaskData((preTaskData) => {
      return preTaskData.filter((task) => task.id !== id);
    });
  };

  return (
    <StyledList>
      <button type="button" onClick={add}>add Task +</button>
      {tempTaskData.map((taskItem, index) => {
        const { title, startDate, endDate, datails, id } = taskItem;
        return (
          <Task
            key={id}
            title={title}
            startDate={startDate}
            endDate={endDate}
            datails={datails}
            order={index + 1}
            id={id}
            clickDeleteButtonHandler={clickDeleteButtonHandler}
          />
        );
      })}
    </StyledList>
  );
}

export default List;
