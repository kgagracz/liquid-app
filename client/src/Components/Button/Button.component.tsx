import { IButtonProps } from "./Button.models";
import "./Button.modules.scss";

const Button: React.FC<IButtonProps> = ({ text, onClick, active }) => (
  <button className={`button ${active ? "active" : ""}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
