import { TButtonProps } from "./types";
import * as s from "./styles";

const Button = ({ label, onClick }: TButtonProps) => (
  <s.Button onClick={onClick}>{label}</s.Button>
);

export default Button;
