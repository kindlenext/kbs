import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="btn btn-primary btn-lg">{props.children}</button>;
}

Button.displayName = "Button";
