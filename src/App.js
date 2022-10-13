import { StyledGlobal } from './style/global.styled';
import List from './component/list'
function App() {
  const taskData = [
      {
        "id": "4487987987987",
        "title": "task edit panel",
        "startDate": "20221010",
        "endDate": "20221011",
        "items": [
          {
            "name": "",
            "days": ""
          },
          {
            "name": "",
            "days": ""
          }
        ]
      },
      {
        "id": "4123123187",
        "title": "task edit panel",
        "startDate": "20221010",
        "endDate": "20221011",
        "items": [
          {
            "name": "",
            "days": ""
          },
          {
            "name": "",
            "days": ""
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
