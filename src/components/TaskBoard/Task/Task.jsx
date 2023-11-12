import { useState } from "react";
import "./task.css";
import useTasksStore from "../../../store/tasks";
import { useEffect } from "react";

const Task = ({ id, name, shortDesk, date, status, fullDesc }) => {
  const [isChecked, setIsChecked] = useState(status);
  const tasks = useTasksStore((state) => state.tasks);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const newDate = new Date(date);
  const dateStr = `${newDate.getDate()}.${
    newDate.getMonth() + 1
  }.${newDate.getFullYear()}`;
  const handleModal = () => {
    useTasksStore
      .getState()
      .changeCurrentTask({ id, name, shortDesk, date, status, fullDesc });

    useTasksStore.getState().changeModal(true);
  };

  useEffect(() => {
    if (tasks) {
      const task = tasks.find((task) => task.id === id);
      if (task) {
        setIsChecked(task.status);
      }
    }
  }, [tasks]);

  return (
    <div className="task-container" onClick={handleModal}>
      <div className="task" id={id}>
        <div>
          <h1>{name}</h1>
          <p>{shortDesk}</p>
        </div>
        <div>
          <input
            id={id}
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label onClick={handleCheckboxChange} htmlFor={id}></label>
        </div>
      </div>
      <span>{dateStr}</span>
    </div>
  );
};

export default Task;
