import { create } from "zustand";

const useTasksStore = create((set) => ({
    tasks: null,
    showNotResolved: false,
    isModalOpen: true,
    currentTask: null,
    addTask: (task) => set((state) => ({ tasks: task})),
    changeShowResolve: (resolve) => set((state) => ({ showNotResolved: resolve})),
    changeModal: (modal) => set((state) => ({ isModalOpen: modal})),
    changeCurrentTask: (id) => set((state) => ({ currentTask: id})),
}));

export default useTasksStore;