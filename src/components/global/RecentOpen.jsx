"use client";
import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useSlideStore } from "@/store/useSlideStore";
import { useRouter } from "next/navigation";

const RecentOpen = ({ recentProjects }) => {
  const router = useRouter();
  const { setSlide } = useSlideStore();

  const handleClick = (projectId, slides) => {
    if (!projectId || !slides) {
      toast.error("Project not found", {
        description: "Please try again",
      });
      return;
    }
    setSlide(JSON.parse(JSON.stringify(slides)));
    router.push(`/presentation/${projectId}`);
  };
  return (
    recentProjects.length > 0 && (
      <div>
        <SidebarGroup>
          <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
          <SidebarMenu>
            {recentProjects.length > 0
              ? recentProjects.map((item) => {
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        className={`hover:bg-neutral-700`}
                      >
                        <Button
                          onClick={() => handleClick()}
                          variant={"link"}
                          className={`text-xs items-center justify-start`}
                        >
                          <span>{item.title}</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })
              : ""}
          </SidebarMenu>
        </SidebarGroup>
      </div>
    )
  );
};

export default RecentOpen;
