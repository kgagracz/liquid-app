import { IButtonProps } from "./Button.models";
import "./Button.modules.scss";

const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  active,
  disabled,
}) => (
  <button
    className={`button ${active ? "active" : ""}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
