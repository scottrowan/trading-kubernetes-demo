import React from "react";

interface VerticalContainerProps {
  children: React.ReactNode;
}

const VerticalContainer: React.FC<VerticalContainerProps> = ({ children }) => {
  return <div className="h-full flex flex-col">{children}</div>;
};

export default VerticalContainer;
