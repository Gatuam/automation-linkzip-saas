import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Serachbar = () => {
  return (
    <div className="min-w-[65%] relative flex items-center border rounded-full  px-3 ">
      <SearchIcon className="text-neutral-500" />
      <Button
        type="submit"
        size="sm"
        variant="ghost"
        className="absolute left-0 h-fit rounded-l-none bg-transparent hover:bg-transparent"
      ></Button>
      <Input
        type="text"
        placeholder="Search by title"
        className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 ml-6 px-1 rounded-full shadow-none  "
      />
    </div>
  );
};

export default Serachbar;
