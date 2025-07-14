"use client";
import React from "react";
import { motion } from "motion/react";
import { itemVariants, themes } from "@/lib/constant";
import { useSlideStore } from "@/store/useSlideStore";
import { useRouter } from "next/navigation";
import ThumnailPreview from "./ThumnailPreview";

const ProjectCard = ({
  projectId,
  title,
  createdAt,
  isDelete,
  slideData,
  src,
}) => {
  const router = useRouter();
  const { setSlide } = useSlideStore();
  const handleNavigation = () => {
    setSlide(JSON.parse(JSON.stringify(slideData)));
    router.push(`/presentation/${projectId}`);
  };
  const theme = themes.find((theme) => theme.name === themes[9].name);

  return (
    <motion.div
      className={`group w-full flex flex-col gao-y-3 rounded-2xl p-3 transition-colors${
        !isDelete && "hover:bg-muted/50"
      } `}
      variants={itemVariants}
    >
      <div
        className="relative aspect-[16/20] overflow-hidden rounded-lg cursor-pointer "
        onClick={handleNavigation}
      >
        <ThumnailPreview
          // slide={JSON.parse(JSON.stringify(slideData))?.[0]}
          theme={theme}
        ></ThumnailPreview>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
