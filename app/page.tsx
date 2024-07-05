"use client";

import { useState } from "react";

import AddTask from "@/components/AddTask";
import LogoutButton from "@/components/LogoutBtn";
import SelectChild from "@/components/SelectChild";

interface Task {
  name: string;
  description: string;
  wage: number;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTaskClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  return (
    <section className="w-full min-h-screen bg-[#FFF5C2]">
      <header className="w-full h-[90px] bg-[#6DB9EF] flex items-center justify-between px-24 shadow-lg shadow-black">
        <p className="h-[50px] w-[100px] bg-white flex items-center justify-center text-lg font-bold">
          ლოგო
        </p>
        <nav className="h-full">
          <ul className="flex items-center text-[#F4F27E] font-semibold text-lg h-full">
            <li className="h-full w-[200px] border-r border-r-[#F4F27E] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
              მთავარი
            </li>
            <li className="h-full w-[200px] border-r border-r-[#F4F27E] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
              ჩვენს შესახებ
            </li>
            <li className="h-full w-[200px] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
              კონტაქტი
            </li>
          </ul>
        </nav>
        <LogoutButton />
      </header>

      <div className="w-full p-20 flex justify-between">
        <div className="w-[600px] h-[300px] bg-[#3081D0] rounded-3xl p-16 flex flex-col justify-end">
          <p className="text-3xl font-bold text-white">20 GEL</p>
        </div>
        <div className="w-[800px] flex justify-around">
          <SelectChild />
          <div className="w-[400px]">
            <button
              onClick={handleAddTaskClick}
              className="bg-white h-10 w-40 rounded-lg font-bold"
            >
              + Add Task
            </button>
            {tasks.map((task, index) => (
              <div
                key={index}
                className="w-full h-[150px] p-4 bg-white mt-4 rounded-md shadow-md"
              >
                <p className="text-xl font-semibold">{task.name}</p>
                <p className="text-base mt-2">{task.description}</p>
                <p className="text-base mt-2">{task.wage} GEL</p>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <AddTask onSave={handleSaveTask} onClose={handleModalClose} />
          )}
        </div>
      </div>
    </section>
  );
}
