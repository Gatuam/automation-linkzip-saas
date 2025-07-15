import {
  MoonIcon,
} from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gradient-to-b from-[#363636] to-[#1f1f1f] rounded-full p-4 ">
            <MoonIcon className="w-16 h-auto" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            No Project found
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 max-w-md">
            Please Create one project to get start with{" "}
            <span className="text-vivid font-bold "> Link-zip AI</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
