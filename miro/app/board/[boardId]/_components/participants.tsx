import React from "react";

const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      {/* List of user */}
      List of user
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadow-md w-[100px]" />
  );
};

export default Participants;
