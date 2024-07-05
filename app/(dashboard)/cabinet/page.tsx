"use client";

import AddTask from "@/components/AddTask";
import SelectChild from "@/components/SelectChild";
import { useState } from "react";

interface Task {
  name: string;
  description: string;
  wage: number;
}

const CabinetPage = () => {
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
    <section className="w-full min-h-screen bg-[#FFF5C2] py-36">
      <div className="w-full p-20 flex justify-between">
        <div className="w-[500px] computer:w-[600px] h-[200px] computer:h-[300px] bg-[#3081D0] rounded-3xl p-16 flex flex-col justify-end">
          <p className="text-3xl font-bold text-white">20 GEL</p>
        </div>
        <div className="w-[800px] computer:flex computer:justify-around px-48 computer:px-0">
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
                className="w-full h-[150px] p-4 bg-white mt-4 rounded-md shadow-md flex flex-col justify-between"
              >
                <p className="text-xl font-semibold">{task.name}</p>
                <p className="text-base">{task.description}</p>
                <p className="w-20 h-8 flex justify-center items-center text-sm font-semibold text-white bg-[#6DB9EF] rounded-sm">
                  {task.wage} GEL
                </p>
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
};

export default CabinetPage;
