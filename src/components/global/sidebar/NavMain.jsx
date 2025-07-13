"use client";
import React from "react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavMain = ({ items }) => {
  const pathname = usePathname();
  return (
    <div>
      <SidebarGroup>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className=" rounded-sm ">
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={`${pathname.includes(item.url) && "bg-muted"}`}
              >
                <Link
                  href={item.url}
                  className={`text-lg flex items-center px-4 py-2 rounded-md hover:bg-muted transition ${
                    pathname.includes(item.url)
                      ? "bg-background-80 font-bold"
                      : ""
                  }`}
                >
                  <item.icon className="text-lg"></item.icon>
                  <span className="text-sm text-white">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </div>
  );
};

export default NavMain;
