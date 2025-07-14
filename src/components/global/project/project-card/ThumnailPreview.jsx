import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import React from "react";

const ThumnailPreview = ({ slide, theme }) => {
  return (
    <div
      className={cn(
        "w-full relative aspect-[16/9] rounded-lg overflow-hidden transition-all duration-150 p-2 "
      )}
      style={{
        fontFamily: theme.fontFamily,
        color: theme.accentColor,
        backgroundColor: theme.slideBackgroundColor,
        backgroundImage: theme.gradientBackgroundk,
      }}
    >
      {slide && (
        <div className="scale-[0.5] origin-bottom-left w-[200%] h-[200%] overflow-hidden "></div>
      )}
      {!slide && (
        <div className="w-full h-full bg-gray-300 flex justify-center items-center">
          <ImageIcon className="w-6 h-6 text-gray-500" />
          wtf
        </div>
      )}
    </div>
  );
};

export default ThumnailPreview;
