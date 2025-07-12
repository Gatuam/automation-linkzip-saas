import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Button } from "../ui/button";

const RecentOpen = ({ recentProjects }) => {
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
