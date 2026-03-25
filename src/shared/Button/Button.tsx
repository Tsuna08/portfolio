"use client";

import { ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
};
