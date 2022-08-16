import React from "react";
import { Container, variantColor } from "./styles";

export type ButtonProps = {
  children: string;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({ children, variant = "primary" }: ButtonProps) {
  const { bgColor, borderColor, color, hover } = variantColor[variant];
  return (
    <Container
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      hoverBgColor={hover.bgColor}
      hoverColor={hover.color}
    >
      {children}
    </Container>
  );
}
