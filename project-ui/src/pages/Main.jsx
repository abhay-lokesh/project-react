import React, { useEffect } from 'react';
import PROJECT_LIST from '../assets/data/projectList';
import TASK_LIST from '../assets/data/taskList';
import { AddReleaseContainer, TableContainer } from '../containers';
import { useState } from 'react';

const Main = () => {
  const [masterList, setMasterList] = useState([]);
  const [taskList, setTaskList] = useState({});

  useEffect(() => {
    setMasterList(PROJECT_LIST);
    setTaskList(TASK_LIST);
  }, []);
  return (
    <React.Fragment>
      <section>
        <TableContainer tableData={masterList} taskList={taskList} />
      </section>
      <AddReleaseContainer />
    </React.Fragment>
  );
};
export default Main;
