import styled, { css } from "styled-components";
import { ButtonVariants } from "./Button";

interface ButtonContainer {
  variant: ButtonVariants;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainer>`
  width: 100px;
  height: 40px;
  border: 0;
  ${(props) => {
    return css`
      background: ${buttonVariants[props.variant]};
    `;
  }};
`;
