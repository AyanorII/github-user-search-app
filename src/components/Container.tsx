import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`container mx-auto px-5 md:px-10 lg:px-[10rem] xl:px-[17.5rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
