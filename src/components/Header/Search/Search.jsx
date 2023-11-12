import icon from "../../../assest/search.svg";
import "./search.css";
import { useState, useEffect } from "react";
import useTasksStore from "../../../store/tasks";
import { serverPath } from "../../../serverPath";

const Search = () => {
    const tasks = useTasksStore((state) => state.tasks);
    const addTasks = useTasksStore((state) => state.addTask);
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        if (value.length > 0) {
            console.log(value);
            fetch(
                `${serverPath}/doczilla/find?word=${value}`
            )
                .then((response) => response.json())
                .then((data) => {
                    addTasks(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="search-container">
            <button onClick={handleClick} className="search-button">
                <img src={icon} alt="" />
            </button>
            <input
                className="search-input"
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Search;
