"use client";

import { useState } from "react";

// Define the Task interface
interface Task {
  name: string;
  description: string;
  wage: number;
}

// Define the props interface for AddTask
interface AddTaskProps {
  onSave: (task: Task) => void;
  onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onSave, onClose }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskWage, setTaskWage] = useState<string>("");

  const handleSaveClick = () => {
    onSave({
      name: taskName,
      description: taskDescription,
      wage: parseFloat(taskWage),
    });
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <form
        className="w-[500px] p-10 bg-white rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveClick();
        }}
      >
        <div className="mb-4">
          <label className="block text-md font-semibold text-gray-700">
            დავალება
          </label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-semibold text-gray-700">
            აღწერა
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-semibold text-gray-700">
            თანხა
          </label>
          <input
            type="number"
            value={taskWage}
            onChange={(e) => setTaskWage(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg"
          >
            უკან
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
          >
            შენახვა
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
