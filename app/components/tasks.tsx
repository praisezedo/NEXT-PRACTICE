"use client";
import { useState } from "react"
import Link from "next/link";

export default function Tasks() {
   const [task , setTask] = useState<string>("");
     const [tasks , setTasks] = useState<string[]>([]);
const addNewTask = () => {
    setTasks([...tasks , task])
    setTask("")

}     

     return (
        <>{
      <aside className="pl-3 border-l-4  border-black right-10 top-20 bottom-0 justify-center items-center flex flex-col fixed">
       <div className="animate-pulse relative border-b-4 border-black font-bold text-2xl mb-5"><h1>My Goals</h1></div> 
       <div className="flex gap-5">
        <input className="border-2 border-black p-4 rounded-2xl" type="text" placeholder="enter the task" value={task} onChange={(e) => setTask(e.target.value)}/>
        <button className="bg-black text-white p-4 rounded-2xl hover:opacity-50 transition-all duration-700" onClick={addNewTask}>Add</button>
       </div>
      <ul className="grid grid-cols-1 gap-10 mt-10">
         {tasks.map((t ,i) => {
            return <li className="flex gap-3 border-2 border-black p-4 rounded-2xl font-bold"><h1>{i + 1}  –</h1><h2>{t}</h2></li>
         })}
      </ul>
    </aside> 
        }
        </>
     )
}

