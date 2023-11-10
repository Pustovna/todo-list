import CalendarBoard from "../CalendarBoard/CalendarBoard";
import "./table.css";

import { useState } from 'react';

const TableConditions = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="table-container">
            <div>
                <button class="table-button">Сегодня</button>
            </div>
            <div>
                <button class="table-button">На неделю</button>
            </div>
            
            <CalendarBoard />
            <div className="table-check">
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                   Только невыполненные
                </label>
            </div>
        </div>
    );
};
export default TableConditions;