import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const AppSidebar = ({ recentProjects, user, ...props }) => {
  return (
    <div>
      <Sidebar
        className="max-w-[212px] bg-[#1a1a1a]"
        collapsible="icon"
        {...props}
      >
        <SidebarHeader className="pt-9 px-4">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open] :text-sidebar-accent-foregroun "
          >
            <div className=" flex aspect-square size-7 items-center justify-center rounded-lg text-sidebar-primary-foreground ">
              <Avatar className="h-5 w-5 rounded-full flex items-center ">
                <AvatarImage src={"/globe.svg"} alt="avatar-img"></AvatarImage>
                <AvatarFallback className="rounded-lg">LINKzip</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-primary text-xl font-semibold">LINK-ZIP</span>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarContent className="px-3 mt-10 gap-y-6 "></SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
