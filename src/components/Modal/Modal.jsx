import React from "react";
import "./modal.css";
import useTasksStore from "../../store/tasks";
import { useState } from "react";

const Modal = () => {
  const isOpen = useTasksStore((state) => state.isModalOpen);
  const closeModal = useTasksStore((state) => state.changeModal);
  const currentTaskId = useTasksStore((state) => state.currentTask);
  
  if (!isOpen) return null;

  const handleClose = () => {
    useTasksStore.getState().changeCurrentTask(null);
    closeModal(false);
  };

  const handleCheckboxChange = () => {
    useTasksStore.getState().changeCurrentTask({...currentTaskId, status: !currentTaskId.status});
    useTasksStore.getState().changeTaskStatus(currentTaskId.id);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={handleClose}>
          X
        </button>
        {currentTaskId && (
          <div className="modal-content">
            <div className="modal-title">
            <h1>{currentTaskId.name}</h1>
              <input
                id={currentTaskId.id}
                className="checkbox"
                type="checkbox"
                checked={currentTaskId.status}
                onChange={handleCheckboxChange}
              />
              <label onClick={handleCheckboxChange} htmlFor={currentTaskId.id}></label>
            </div>
            <p className="modal-date">{currentTaskId.date}</p>
            <p>{currentTaskId.fullDesc}</p>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
