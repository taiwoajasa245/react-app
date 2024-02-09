import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <div className="flex ">
      <button onClick={onClick} className={"btn m-2 btn-" + color}>
        {" "}
        {children}{" "}
      </button>
    </div>
  );
};

export default Button;
