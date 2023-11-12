import CalendarBoard from "../CalendarBoard/CalendarBoard";
import "./table.css";
import { useState } from "react";
import useTasksStore from "../../store/tasks";
import { serverPath } from "../../serverPath";

const TableConditions = () => {
  const [isChecked, setIsChecked] = useState(false);
  const notResolvedTasks = useTasksStore((state) => state.showNotResolved);
  const changeResolve = useTasksStore((state) => state.changeShowResolve);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    changeResolve(!notResolvedTasks);
  };

  const todayFromStart = new Date();
  const today = new Date();
  const startDate = new Date("2021-11-22");
  const endDate = new Date();
  todayFromStart.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  const tasks = useTasksStore((state) => state.tasks);
  const addTasks = useTasksStore((state) => state.addTask);

  const handleTodayClick = async () => {
    fetch(
      `${serverPath}/doczilla/date?from=${todayFromStart.getTime()}&to=${today.getTime()}`
    )
      .then((response) => response.json())
      .then((data) => {
        addTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWeekClick = async () => {
    const daysSinceMonday = (today.getDay() + 6) % 7;
    const startOfWeek = today.getTime() - daysSinceMonday * 24 * 60 * 60 * 1000;

    fetch(
      `${serverPath}/doczilla/date?from=${startOfWeek}&to=${today.getTime()}`
    )
      .then((response) => response.json())
      .then((data) => {
        addTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="table-container">
      <div>
        <button onClick={handleTodayClick} className="table-button">
          Сегодня
        </button>
      </div>
      <div>
        <button onClick={handleWeekClick} className="table-button">
          На неделю
        </button>
      </div>

      <CalendarBoard />
      <div className="table-check">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label>Только невыполненные</label>
      </div>
    </div>
  );
};
export default TableConditions;
