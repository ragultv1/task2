// components/Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "danger";
}

const Button: React.FC<ButtonProps> = ({ label, onClick}) => {
  

  return (
    <button className="  " onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
