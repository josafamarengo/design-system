import styled from "styled-components";
import { Colors } from "../../styles/global";

type ContainerProps = {};

export const variantColor = {};

export const Container = styled.input<ContainerProps>`
  padding: 0.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #252525;
  &::placeholder {
    color: #252525;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
