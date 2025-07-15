"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { itemVariants, themes } from "@/lib/constant";
import { useSlideStore } from "@/store/useSlideStore";
import { useRouter } from "next/navigation";
import ThumnailPreview from "./ThumnailPreview";
import { timeAgo } from "@/lib/utils";
import AlertDailogBox from "../../AlertDailogBox/AlertDailogBox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { deleteProject, recoverProject } from "@/actions/project";

const ProjectCard = ({
  projectId,
  title,
  createdAt,
  isDelete,
  slideData,
  src,
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setSlide } = useSlideStore();
  const handleNavigation = () => {
    setSlide(JSON.parse(JSON.stringify(slideData)));
    router.push(`/presentation/${projectId}`);
  };
  const theme = themes.find((theme) => theme.name === themes[9].name);
  const handleDelete = async () => {
    setLoading(true);
    if (!projectId) {
      setLoading(false);
      toast.error("Error", { description: "Project not found" });
      return;
    }
    try {
      const res = await deleteProject(projectId);
      if (res.status !== 200 || !res.data) {
        throw new Error("failed to delete project");
        return;
      }
      setOpen(false);
      router.refresh();
      toast.success("Success", { description: "project delete successfully " });
    } catch (error) {
      console.log(error);
      toast.error("Opp!", {
        description: "Server error",
      });
    }
  };

  const handleRecover = async () => {
    setLoading(true);
    if (!projectId) {
      setLoading(false);
      toast.error("Error", { description: "Project not found" });
      return;
    }
    try {
      const res = await recoverProject(projectId);
      if (res.status !== 200 || !res.data) {
        throw new Error("failed to recover project");
        return;
      }
      setOpen(false);
      router.refresh();
      toast.success("Success", {
        description: "project recover successfully ",
      });
    } catch (error) {
      console.log(error);
      toast.error("Opp!", {
        description: "Server error",
      });
    }
  };

  return (
    <motion.div
      className={`group w-full flex flex-col space-y-3 rounded-xl p-3 transition-colors${
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
        <div className="w-full ">
          <div className="space-y-1">
            <h3 className="font-semibold  text-primary line-clamp-1 mt-5 text-xl">
              Nigga Wtf is that bro????
            </h3>
            <div className="flex w-full justify-between items-center gap-2">
              <p
                className="text-sm text-muted-foreground"
                suppressHydrationWarning
              >
                {timeAgo(createdAt)}
              </p>
              {isDelete ? (
                <AlertDailogBox
                  description="This will be  recover your project and restore  your data"
                  className="bg-orange-500 text-white cursor-pointer dark:bg-orange-500 dark:hover:bg-orange-700 "
                  open={open}
                  loading={loading}
                  onClick={handleRecover}
                  handleOpen={() => setOpen(!open)}
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className={"bg-[#7e7e7e98] dark:hover:bg-background-90"}
                  >
                    Recover
                  </Button>
                </AlertDailogBox>
              ) : (
                <AlertDailogBox
                  description="This will be  delete your project from  your data"
                  className="bg-red-500 text-white cursor-pointer dark:bg-red-500 dark:hover:bg-red-700 "
                  open={open}
                  loading={loading}
                  onClick={handleDelete}
                  handleOpen={() => setOpen(!open)}
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className={"bg-[#fd4b4bc2] dark:hover:bg-[#9e5656]"}
                  >
                    Delete
                  </Button>
                </AlertDailogBox>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
