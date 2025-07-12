import { getRecentProjects } from "@/actions/project";
import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/global/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
      </SidebarProvider>
    </div>
  );
};

export default layout;
