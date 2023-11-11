
import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import useTasksStore from '../../store/tasks';

const Modal = () => {
    const isOpen = useTasksStore((state) => state.isModalOpen);
    const closeModal = useTasksStore((state) => state.changeModal);
    const tasks = useTasksStore((state) => state.tasks);
    const currentTaskId = useTasksStore((state) => state.currentTask);
  
    if (!isOpen) return null;

    const handleClose = () => {
        useTasksStore.getState().changeCurrentTask(null);
        closeModal(false);
    };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={handleClose}>
          X
        </button>
        {currentTaskId && tasks?.find((task) => task.id === currentTaskId)?.fullDesc}
      </div>
    </div>
  );
};

export default Modal;
