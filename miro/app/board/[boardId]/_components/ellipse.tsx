import { colorToCss } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";
import React from "react";

interface EllipseProps {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: EllipseProps) => {
  return (
    <ellipse
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${layer.x}px, ${layer.y}px)`,
      }}
      cx={layer.width / 2}
      rx={layer.width / 2}
      cy={layer.height / 2}
      ry={layer.height / 2}
      strokeWidth={1}
      fill={layer.fill ? colorToCss(layer.fill) : "#CCC"}
      stroke={selectionColor || "transparent"}
    />
  );
};

export default Ellipse;
