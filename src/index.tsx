import React, { ReactNode } from "react";
import "./styles.scss";

export type ButtonProps = {
  variant: "primary" | "success" | "warning" | "danger";
  size: "small" | "medium" | "large";
  label: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const App = ({
  variant = "primary",
  size = "medium",
  label,
  onClick,
}: ButtonProps) => {
  let className = "";
  className = "spunky_button " + variant + " " + size;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default App;
