import { getRecentProjects } from "@/actions/project";
import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/global/sidebar/AppSidebar";
import UpperInfoBar from "@/components/global/upper-info-abr/UpperInfoBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }) => {
  const recentProject = await getRecentProjects();
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect("/sign-in");
  }
  const recentProjects = recentProject.status === 200 ? recentProject.data : [];
  return (
    <div>
      <SidebarProvider>
        <AppSidebar user={checkUser.user} recentProjects={recentProjects}>
          {children}
        </AppSidebar>
        <SidebarInset>
          <UpperInfoBar user={checkUser.user}></UpperInfoBar>
          <div className="p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default layout;
