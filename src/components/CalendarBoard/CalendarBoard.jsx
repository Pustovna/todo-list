import Calendar from "react-calendar";
import "./calendar.css";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import useTasksStore from "../../store/tasks";
import {serverPath} from "../../serverPath";


const CalendarBoard = () => {
  const [value, onChange] = useState(new Date());
  const tasks = useTasksStore((state) => state.tasks);
  const addTasks = useTasksStore((state) => state.addTask);


  useEffect(() => {
    if (value.length === 2) {
      fetch(
        `${serverPath}/doczilla/date?from=${value[0].getTime()}&to=${value[1].getTime()}`
      )
        .then((response) => response.json())
        .then((data) => {
          addTasks(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } , [value]);

  return (
    <div>
      <Calendar  onChange={onChange} value={value} selectRange={true} returnValue={"range"}/>
    </div>
  );
};

export default CalendarBoard;


