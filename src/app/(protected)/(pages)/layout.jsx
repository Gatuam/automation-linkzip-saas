import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/global/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }) => {
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect("/sign-in");
  }
  return (
    <div>
      <SidebarProvider>
        <AppSidebar>{children}</AppSidebar>
      </SidebarProvider>
    </div>
  );
};

export default layout;
