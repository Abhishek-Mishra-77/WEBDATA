import React, { useState } from "react";
import NewSelect from "../../UI/NewSelect";
import { MdCompareArrows } from "react-icons/md";
import Multiselect from 'multiselect-react-dropdown';

const Merge = () => {

  const options = [
    {
      cat: "Group 1",
      key: "Option 1",
    },
    {
      cat: "Group 1",
      key: "Option 2",
    },
    {
      cat: "Group 1",
      key: "Option 3",
    },
    {
      cat: "Group 2",
      key: "Option 4",
    },
    {
      cat: "Group 2",
      key: "Option 5",
    },
    {
      cat: "Group 2",
      key: "Option 6",
    },
    {
      cat: "Group 2",
      key: "Option 7",
    },
  ]

  return (
    <div className="h-[100vh] pt-24 overflow-y-hidden bg-blue-500 flex justify-center items-start">
      <div className="my-auto bg-white p-10 rounded-3xl mx-10">
        <h1 className="text-center mb-6 text-black text-2xl font-bold">
          MERGE
        </h1>
        <div className="flex flex-row items-end gap-4 lg:gap-7">
          <p className="text-black font-semibold lg:text-xl sm:min-w-40 mb-2">
            Select Template :{" "}
          </p>
          <div className="sm:w-80 md:w-96">
            <NewSelect
              label="Select Template"
              //   onTemplateSelect={setSelectedTemplate }
            />
          </div>
        </div>
        <div className="flex flex-row items-end gap-5 lg:gap-7 mt-5">
          <p className="text-black font-semibold lg:text-xl sm:min-w-40 mb-2">
            Select CSV File :{" "}
          </p>
          <div className="sm:w-80 md:w-96">
            <Multiselect
              displayValue="key"
              onKeyPressFn={function noRefCheck() {}}
              onRemove={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              onSelect={function noRefCheck() {}}
              options={options}
              showCheckbox
              placeholder="Select CSV Files"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all flex justify-center items-center gap-2"
          >
            <MdCompareArrows size={23} /> Compare & Merge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Merge;
