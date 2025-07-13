import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-context-menu";
import React from "react";
import Serachbar from "./Serachbar";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import NewProjectButoon from "./NewProjectButoon";

const UpperInfoBar = ({ user }) => {
  return (
    <div className="sticky top-0 z-10 flex shrink-0 flex-wrap items-center p-3 justify-between border-b ">
      <SidebarTrigger></SidebarTrigger>
      <Separator orientation="vertical" className="mr-2 h-4"></Separator>
      <div className="w-full max-w-[90%] flex flex-wrap items-center justify-center gap-4 ">
        <Serachbar />
        <div className="flex flex-wrap gap-4 itemc">
          <Button className="rounded-lg bg-neutral-900 hover:bg-neutral-800 text-primary">
            <ArrowUp></ArrowUp>
            Import
          </Button>
          <NewProjectButoon user={user}></NewProjectButoon>
        </div>
      </div>
    </div>
  );
};

export default UpperInfoBar;
