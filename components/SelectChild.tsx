"use client";

import { MdChildCare } from "react-icons/md";

import { useState } from "react";

const SelectChild = () => {
  const [selectedChild, setSelectedChild] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChild(event.target.value);
  };

  return (
    <div className="w-[200px] mb-10 computer:mb-0">
      <label
        htmlFor="child-select"
        className="block text-sm font-medium text-gray-700"
      >
        Select Child
      </label>
      <select
        id="child-select"
        name="child-select"
        value={selectedChild}
        onChange={handleSelectChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>
          Select a child
        </option>
        <option value="David">David</option>
        <option value="John">John</option>
        <option value="Steven">Steven</option>
      </select>
      {selectedChild && (
        <div className="selected-child mt-4">
          <p className="text-base font-bold flex items-center bg-white px-5 py-3 gap-1 rounded-lg shadow-lg shadow-black">
            <MdChildCare className="text-xl" /> {selectedChild}
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectChild;
