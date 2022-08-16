import React from "react";
import { Container, variantColor } from "./styles";

export type InputProps = {
  placeholder: string;
};

export function Input() {
  return <Container placeholder="Insira seu texto" />;
}
