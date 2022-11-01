import React from "react";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-primary-main hover:bg-primary-light text-text-primary-light py-3 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
