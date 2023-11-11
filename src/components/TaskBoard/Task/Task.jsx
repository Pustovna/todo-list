import { useState } from "react";
import "./task.css";

const Task = ({id, name, shortDesk, date}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const newDate = new Date(date);
  const dateStr = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;

  return (
    <div className="task-container">
      
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
