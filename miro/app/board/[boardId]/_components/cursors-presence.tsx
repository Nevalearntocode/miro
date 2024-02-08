"use client";

import React from "react";
import { memo } from "react";
import { useOthersConnectionIds } from "@/liveblocks.config";
import Cursor from "./cursor";

export const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const CursorsPresence = () => {
  return (
    <>
      {/* Draft pencil */}
      <Cursors />
    </>
  );
};

CursorsPresence.displayName = "CursorsPresence";

export default CursorsPresence;
