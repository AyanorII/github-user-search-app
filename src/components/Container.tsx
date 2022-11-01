import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`container mx-auto px-5 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
