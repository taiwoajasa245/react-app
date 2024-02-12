import React from "react";



interface Props {
  children: string;
  onClick: () => void; 
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible ">
      {" "}
      <strong> {children}</strong>{" "}
      <button onClick={onClick} type="button" className="btn-close "  />
    </div>
  );
};

export default Alert;
