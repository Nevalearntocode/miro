import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  disabled: boolean;
  onClick: () => void;
}

const Footer = ({
  authorLabel,
  createdAtLabel,
  disabled,
  isFavorite,
  onClick,
  title,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] truncate text-muted-foreground">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-yellow-400",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavorite && "fill-yellow-400 text-yellow-400"
          )}
        />
      </button>
    </div>
  );
};

export default Footer;
