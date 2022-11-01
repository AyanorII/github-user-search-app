import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

const Card = ({children, className, darker}: Props) => {
  const backgroundColors = darker
    ? "bg-background-main-light dark:bg-background-main-dark"
    : "bg-background-paper-light dark:bg-background-paper-dark";

  return (
    <div
      className={`drop-shadow-lg rounded-lg p-3 ${backgroundColors} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card
