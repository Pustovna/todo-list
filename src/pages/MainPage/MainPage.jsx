import React from "react";
import Layout from "../../components/Layout/Layout";
import TableConditions from "../../components/TableConditions/TableConditions";
import TaskBoard from "../../components/TaskBoard/TaskBoard";


const MainPage = () => {
    return (
      <Layout>
        <TableConditions></TableConditions>
        <TaskBoard></TaskBoard>
      </Layout>
    );
  };
  
  export default MainPage;
  