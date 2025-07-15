import React from "react";
import { getAllProject } from "@/actions/project";
import NotFound from "@/components/global/notFound/NotFound";
import ProjectCard from "@/components/global/project/project-card/ProjectCard";
const DashboardPage = async () => {
  const AllProject = await getAllProject();
  return (
    <div>
      <div className="flex w-full gap-6 relative p-2 mt-2 ">
        <div className="flex flex-col items-start w-full sm:flex-row sm:jsutify-between sm:items-center ">
          { AllProject && <div className="flex flex-col items-start">
            <h1 className="text-2xl font-semibold dark:text-primary">
              Projects
            </h1>
            <p className="text-sm font-normal dark:text-primary backdrop:blur-lg">
              All of your work in one place
            </p>
          </div>}
        </div>
      </div>
      <div className=" w-full h-190 flex justify-center items-center"> 
      {AllProject && <NotFound></NotFound>}
      </div>
      
    </div>
  );
};

export default DashboardPage;
