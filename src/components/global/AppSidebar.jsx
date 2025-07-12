"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "../ui/sidebar";
import NavMain from "./NavMain";
import { Dna } from "lucide-react";
import { data } from "@/lib/constant";
import RecentOpen from "./RecentOpen";

const AppSidebar = ({ recentProjects, user, ...props }) => {
  return (
    <div>
      <Sidebar
        className="max-w-[212px] bg-[#0c0c0c] border-0"
        collapsible="icon"
        {...props}
      >
        <SidebarHeader className="pt-9 px-4">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open] bg-[#8d8d8d11]"
          >
            <div className=" flex aspect-square size-7 items-center justify-center rounded-lg text-sidebar-primary-foreground ">
              <Dna />
            </div>
            <span className="text-primary text-xl font-semibold">LINK-ZIP</span>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarContent className="px-3 mt-10 gap-y-6 ">
          <NavMain items={data.navMain}></NavMain>
          <RecentOpen recentProjects={recentProjects}></RecentOpen>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
