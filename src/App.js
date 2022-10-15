import { StyledGlobal } from './style/global.styled';
import List from './component/list'
function App() {
  const taskData = [
      {
        "id": "asdfjkasdjf",
        "title": "task edit panel",
        "startDate": "2022-10-10",
        "endDate": "2022-10-11",
        "items": [
          {
            "id": "shdkjfhakjdhfauew",
            "name": "create project and set environment",
            "days": 1
          },
          {
            "id": "shdnxcvnx,mcvnx",
            "name": "create js/css component",
            "days": 2
          }
        ]
      },
      {
        "id": "dsfhajsdhfka",
        "title": "task edit panel",
        "startDate": "2022-10-10",
        "endDate": "2022-10-11",
        "items": [
          {
            "id": "uoiuoiupiupou",
            "name": "create project and set environment",
            "days": 1
          },
          {
            "id": "zxcvzxcvzxcvzxc",
            "name": "create js/css component",
            "days": 2
          }
        ]
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
