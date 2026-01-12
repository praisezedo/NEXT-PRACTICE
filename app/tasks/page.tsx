"use client";
import { useTaskStore } from "../taskmanager";

export default function TasksPage() {

  const { tasks, deleteTask } = useTaskStore();

  const handleDelete = (id: number) => {
    deleteTask(id);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center fixed top-50 left-0 right-100 bottom-0">
        <h1 className="font-bold text-xl right-100 top-50 flex flex-col left-0 justify-center text-center mb-10">
          PRAISE INNOCENTS SMART GOALS
        </h1>
        <ul className="gap-7 right-100 top-70 grid grid-cols-2 left-0  justify-center text-center">
          {tasks.map((t, i) => (
            <li
              className="border-2 border-black rounded-xl p-4 flex gap-10 font-bold items-center justify-between"
              key={i + 1}
            >
              <h1>{i + 1} - </h1>
              <h1>{t}</h1>
              <button
                onClick={() => handleDelete(i)}
                className="border-2 rounded-tr-full border-black hover:animate-bounce transition-all duration-700s"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}