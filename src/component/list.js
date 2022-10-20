import { useState, useEffect} from 'react';
import Task from './task'


function List({taskData}) {
    const[tempTaskData, setTempTaskData] = useState(taskData);
    const add = function() {
      return setTempTaskData((preTaskData) => [
          ...preTaskData,
          {
            "id": "", //自動產生一組新的id
            "title": "",
            "startDate": "",
            "endDate": "",
            "details": ""
          }
      ])
    }

    return (
      <div>
        <div onClick={add}>+</div>
        {tempTaskData.map((taskItem, index) => {
          const {title, startDate, endDate, datails, id} = taskItem;
          return <Task key={id} title={title} startDate={startDate} endDate={endDate} datails={datails} order={index + 1}></Task>
        })}
      </div>
    );
  }
  
  export default List;
  