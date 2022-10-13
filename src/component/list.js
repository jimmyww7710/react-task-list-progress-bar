// import { useState} from 'react';
import Task from './task'

function List({taskData}) {
    return (
      <div>   
        {taskData.map(({id, title, startDate, endDate}) => <Task taskData={taskData} key={id}></Task>)}
      </div>
    );
  }
  
  export default List;
  