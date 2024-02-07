import React from "react";

const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] mx-auto left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>square</div>
        <div>circle</div>
        <div>ellipse</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] mx-auto left-2 flex flex-col bg-white gap-y-4 h-[360px] w-[52px] rounded-md shadow-md" />
  );
};

export default Toolbar;
