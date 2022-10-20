import React from 'react';
import { StyledGlobal } from './style/global.styled';
import List from './component/list'
function App() {
  const taskData = [
      {
        "id": "asdfjkasdjf",
        "title": "task edit panel",
        "startDate": "2022-10-10",
        "endDate": "2022-10-11",
        "details": ""
      },
      {
        "id": "dsfhajsdhfka",
        "title": "task edit panel",
        "startDate": "2022-10-10",
        "endDate": "2022-10-11",
        "details": ""
      },
    ]
  // const [taskData, setTaskData] = useState([
  //   {
  //     "title": "task edit panel",
  //     "startDate": "20221010",
  //     "endDate": "20221011",
  //     "items": [
  //       {
  //         "name": "",
  //         "days": ""
  //       },
  //       {
  //         "name": "",
  //         "days": ""
  //       }
  //     ]
  //   },
  // ])
  return (
    <StyledGlobal>
      <h2>Task Progressing Bar</h2>
      <List taskData={taskData}></List>
    </StyledGlobal>
  );
}

export default App;
