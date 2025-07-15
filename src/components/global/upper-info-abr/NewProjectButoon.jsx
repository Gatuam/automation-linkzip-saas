"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NewProjectButoon = ({ user }) => {
  const router = useRouter();
  return (
    <Button
      size={"sm"}
      onClick={() => router.push("/create-page")}
      className="cursor-pointer"
    >
      <Plus></Plus>
      New Project
    </Button>
  );
};

export default NewProjectButoon;
