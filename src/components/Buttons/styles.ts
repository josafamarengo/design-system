import styled from "styled-components";
import { Colors } from "../../styles/global";

type ContainerProps = {
  bgColor: string;
  color: string;
  borderColor: string;
  hoverBgColor: string;
  hoverColor: string;
};

export const variantColor = {
  primary: {
    bgColor: Colors.primary,
    borderColor: Colors.primary,
    color: Colors.gray,
    hover: {
      bgColor: Colors.darkPrimary,
      color: Colors.gray,
    },
  },
  secondary: {
    bgColor: Colors.secondary,
    borderColor: Colors.secondary,
    color: Colors.lightGray,
    hover: {
      bgColor: Colors.darkSecondary,
      color: Colors.lightGray,
    },
  },
  outline: {
    bgColor: "transparent",
    borderColor: Colors.gray,
    color: Colors.gray,
    hover: {
      bgColor: Colors.darkGray,
      color: Colors.lightGray,
    },
  },
};

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};

  font-size: 16px;

  border-radius: 4px;
  box-shadow: 0 3px 2px #252525;

  min-width: 5rem;
  min-height: 2rem;
  max-width: 10rem;
  width: 20%;

  cursor: pointer;
  &:hover {
    background: ${(props) => props.hoverBgColor};
    border: 1px solid ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: 0 1px 1px #252525;
    transform: translateY(2px);
  }
`;
