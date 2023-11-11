import { create } from "zustand";

const useTasksStore = create((set) => ({
    tasks: null,
    addTask: (task) => set((state) => ({ tasks: task})),
}));

export default useTasksStore;