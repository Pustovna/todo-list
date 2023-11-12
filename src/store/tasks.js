import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: null,
  showNotResolved: false,
  isModalOpen: false,
  currentTask: null,
  addTask: (task) => set((state) => ({ tasks: task })),
  changeShowResolve: (resolve) =>
    set((state) => ({ showNotResolved: resolve })),
  changeModal: (modal) => set((state) => ({ isModalOpen: modal })),
  changeCurrentTask: (id) => set((state) => ({ currentTask: id })),
  changeTaskStatus: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          task.status = !task.status;
          console.log(task);
        }

        return task;
      }),
    })),
}));

export default useTasksStore;
