import { useState } from "react";
import "./task.css";

const Task = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div class="task-container">
      
      <div className="task">
      <div>
        <h1>Task</h1>
        <p>Описание</p>
      </div>
        <div>
          <input
          id="checkbox"
          className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
           <label htmlFor="checkbox"></label>
        </div>
        
      </div>
      <span>08.05.2022 00:05</span>
    </div>
  );
};

export default Task;
