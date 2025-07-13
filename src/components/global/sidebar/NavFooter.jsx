"use client";
import React, { useState } from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../../ui/button";

const NavFooter = ({ prismaUser }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [loading, setLoading] = useState(false);
  return (
    <SidebarMenu>
      <SidebarMenuItem className="group">
        <div className="flex flex-col gap-y-6 group-data-[collapsible=icon]:hidden items-start bg-[#3d3d3d62] rounded-md px-2 py-3">
          {!prismaUser.subscription && (
            <div className="flex flex-col items-start p-2 pb-3 gap-4 bg-background-80 ">
              <div className="flex flex-col items-start gap-1">
                <p className="text-base text-[16px] font-bold">
                  Get
                  <span className="text-vivid"> Creative AI</span>
                </p>
                <span className="text-[13px] mt-1 font-light">
                  Unlock all features including AI.......
                </span>
              </div>
              <div className="flex w-full cursor-pointer">
                <Button
                  className="rounded-full w-full text-vivid cursor-pointer"
                  variant={"outline"}
                  onClick={() => handleUpgrading()}
                >
                  {loading ? "Upgrading....." : "Upgrade"}
                </Button>
              </div>
            </div>
          )}
        </div>
        <SignedIn>
          <SidebarMenuButton
            size="lg"
            className="data-[sate=open]:bg-sidebar-accent mt-2"
          >
            <UserButton></UserButton>
            <div className="grid flex-1 text-left text-[12px] leading-tight ">
              <span className="text-base text-[12px] ">{user?.fullName}</span>
              <span className="text-base text-[12px] ">
                {user?.emailAddresses[0]?.emailAddress}
              </span>
            </div>
          </SidebarMenuButton>
        </SignedIn>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavFooter;
