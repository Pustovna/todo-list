import Task from "./Task/Task";
import "./taskboard.css";
import useTasksStore from "../../store/tasks";
import useFetch from "../../hooks/hooks";
import { useEffect } from "react";
import icon from "../../assest/sort.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";

const TaskBoard = () => {
  const data = useFetch(
    "http://localhost:3000/doczilla/todos?limit=10&offset=1"
  );
  const [sortType, setSortType] = useState("toMost");
  const tasks = useTasksStore((state) => state.tasks);
  const addTasks = useTasksStore((state) => state.addTask);
  const notResolvedTasks = useTasksStore((state) => state.showNotResolved);

  const handleSort = () => {
    let sortedTasks = [...tasks];
    if (sortType === "toMost") {
      setSortType("toLess");
      sortedTasks = [...tasks].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    } else {
      setSortType("toMost");
      sortedTasks = [...tasks].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    }
    addTasks(sortedTasks);
  };

  useEffect(() => {
    if (data) {
      addTasks(data);
    }
  }, [data, addTasks]);

  return (
    <div className="task-board">
      <Modal />
      <div className="sortButton">
        <date>8 мая 2022</date>
        <button onClick={handleSort}>
          <img src={icon} alt="" />
          Сортировать по дате
        </button>
      </div>
      <div className="task-list">
        {tasks?.length === 0 && <p>Нет задач</p>}
        {tasks?.length > 0 &&
          !notResolvedTasks &&
          tasks?.map((task, index) => {
            return (
              <Task
                key={index}
                id={task.id}
                name={task.name}
                shortDesk={task.shortDesc}
                date={task.date}
                status={task.status}
              ></Task>
            );
          })}
        {notResolvedTasks &&
          tasks?.map((task, index) => {
            if (task.status === false) {
              return (
                <Task
                  key={index}
                  id={task.id}
                  name={task.name}
                  shortDesk={task.shortDesc}
                  date={task.date}
                  status={task.status}
                ></Task>
              );
            }
          })}
      </div>
    </div>
  );
};

export default TaskBoard;
