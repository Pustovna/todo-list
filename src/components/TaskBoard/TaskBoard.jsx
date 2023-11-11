import Task from "./Task/Task";
import "./taskboard.css";
import useTasksStore from "../../store/tasks";
import useFetch from "../../hooks/hooks";
import { useEffect } from "react";

const TaskBoard = () => {
  const request = { limit: 10, offset: 0 };
  const data = useFetch(
    "http://localhost:3000/doczilla/todos?limit=10&offset=1"
  );
  const tasks = useTasksStore((state) => state.tasks);
  const addTasks = useTasksStore((state) => state.addTask);

  useEffect(() => {
    // data && addCharacter(data)
    if (data) {
      addTasks(data);
    }
  }, [data, addTasks]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="task-board">
      <div className="task-list">
        {tasks?.length === 0 && <p>Нет задач</p>}
        {tasks?.length > 0 &&
          tasks?.map((task, index) => {
            return (
              <Task
                key={index}
                id={task.id}
                name={task.name}
                shortDesk={task.shortDesc}
                date={task.date}
              ></Task>
            );
          })}
    
      </div>
    </div>
  );
};

export default TaskBoard;
