import React from 'react';
import StyledGlobal from './style/global.styled';
import List from './component/list';

function App() {
  const taskData = [
    {
      id: 'asdfjkasdjf',
      title: 'task edit panel',
      startDate: '2022-10-10',
      endDate: '2022-10-11',
      details: '',
    },
    {
      id: '',
      title: '',
      startDate: '',
      endDate: '',
      details: '',
    },
  ];

  return (
    <StyledGlobal>
      <h2 class="main-title">Task Progressing Bar</h2>
      <List taskData={taskData} />
    </StyledGlobal>
  );
}

export default App;
