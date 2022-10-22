import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledGlobal from './style/global.styled';
import List from './component/list';

function App() {
  const taskData = [
    {
      id: uuidv4(),
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
