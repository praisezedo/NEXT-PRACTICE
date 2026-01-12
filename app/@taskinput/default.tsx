"use client";

import { useState } from "react";
import { useTaskStore } from "../taskmanager";

export default function TaskInput() {
  const [task, setTask] = useState<string>('');
  const { tasks, addTask, deleteTask } = useTaskStore();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && task.trim()) {
      addNewGoal();
    }
  };

  const addNewGoal = () => {
    addTask(task);
    setTask('');
  };

  const handleDelete = (id: number) => {
    deleteTask(id);
  };

  return (
    <>
      <div className="flex flex-col text-center items-center gap-6">
        <h1 className="font-bold text-2xl border-b-2 border-black animate-pulse">GOALS</h1>
        <div className="flex gap-10">
          <input
            onKeyDown={handleKeyPress}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="font-bold border-2 border-black p-3 rounded-xl"
            type="text"
            placeholder="Enter a Goal"
          />
          <button
            onClick={() => addNewGoal()}
            className="hover:opacity-50 transition-all duration-700 font-bold p-3 rounded-xl bg-black text-white"
          >
            Add
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-5 mt-5 font-bold">
        {tasks.map((t: string, i: number) => (
          <li className="flex justify-between gap-4" key={i + 1}>
            <h1>{i + 1} - {t}</h1>
            <button
              className="border-2 rounded-tr-full border-black hover:animate-bounce transition-all duration-700s"
              onClick={() => handleDelete(i)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}