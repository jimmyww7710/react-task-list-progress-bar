// import { useState} from 'react';
import Task from './task'


function List({taskData}) {
    // console.log('taskData:', taskData);
    
    return (
      <div>
        {taskData.map((taskItem, index) => {
          const {title, startDate, endDate, items, id} = taskItem;
          // console.log(title, startDate, endDate, items, id);
          return <Task key={id} title={title} startDate={startDate} endDate={endDate} items={items} order={index + 1}></Task>
        })}
      </div>
    );
  }
  
  export default List;
  