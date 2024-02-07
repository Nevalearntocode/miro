import React from "react";

const Info = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 flex items-center shadow-md">
      {/* info about board */}
      Info about this board
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md h-12 flex items-center shadow-md w-[300px]" />
  );
};

export default Info;
