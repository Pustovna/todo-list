import Task from './Task/Task';
import './taskboard.css';


const TaskBoard = () => { 
    return (
        <div className="task-board">
            <div class="task-list">
            <Task></Task>
            </div>
        </div>
        
    )

}

export default TaskBoard;