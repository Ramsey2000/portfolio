import React from "react";

interface CustomButtonProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "link";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  icon,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type === "link" ? "button" : type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 border border-blue-500 rounded-full px-4 py-1 text-white transition-all duration-300 hover:bg-blue-500/10 ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}

      <span className="font-medium">{title}</span>
    </button>
  );
};

export default CustomButton;
