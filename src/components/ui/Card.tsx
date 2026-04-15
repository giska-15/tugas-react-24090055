import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`overflow-hidden rounded border border-gray-300 border-r-6 border-r-red-900 bg-white p-6 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};
