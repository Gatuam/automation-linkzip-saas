import React from "react";
import {  getAllProject } from "@/actions/project";
const DashboardPage = async () => {
  const AllProject = await getAllProject();
  return (
  <div className="flex w-full gap-6 relative ">
    <div className="flex flex-col items-start w-full gap-6 sm:flex-row sm:jsutify-between sm:items-center ">
      <div className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold dark:text-primary">
      Projects
      </h1>
      <p className="text-sm font-normal dark:text-primary backdrop:blur-lg">
        All of your work in one place 
      </p>
      </div>
    </div>
  </div>
)};

export default DashboardPage;
