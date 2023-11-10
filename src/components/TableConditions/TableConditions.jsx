import CalendarBoard from "../CalendarBoard/CalendarBoard";

import { useState } from 'react';

const TableConditions = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <div>
                <button>Сегодня</button>
            </div>
            <div>
                <button>На неделю</button>
            </div>
            
            <CalendarBoard />
            <div>
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