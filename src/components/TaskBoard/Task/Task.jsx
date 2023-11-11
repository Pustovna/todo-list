import { useState } from "react";
import "./task.css";
import Modal from "../../Modal/Modal";
import useTasksStore from "../../../store/tasks";

const Task = ({id, name, shortDesk, date, status}) => {
  const [isChecked, setIsChecked] = useState(status);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const newDate = new Date(date);
  const dateStr = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
  const handleModal = () => {
    useTasksStore.getState().changeCurrentTask(id);
    useTasksStore.getState().changeModal(true);
  }

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
