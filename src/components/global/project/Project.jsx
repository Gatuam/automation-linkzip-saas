"use client";
import React from "react";
import { motion } from "motion/react";
import { containerVariations } from "@/lib/constant";
import ProjectCard from "./project-card/ProjectCard";

const Project = ({ projects }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariations}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          projectId={project?.id}
          title={project?.title}
          createdAt={project.createdAt.toString()}
          isDelete={project?.isDeleted}
          slideData={project?.slideData}
          src={
            project.thumbnail ||
            "https://unsplash.com/photos/abstract-layered-shapes-with-a-gradient-orange-color-5q4zsTaVN4I"
          }
        ></ProjectCard>
      ))}
    </motion.div>
  );
};

export default Project;
