import { ButtonContainer } from "./button.styles";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
  variant?: ButtonVariants;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
