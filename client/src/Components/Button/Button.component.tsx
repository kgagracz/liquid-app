import { IButtonProps } from "./Button.models";
import "./Button.modules.scss";

const Button: React.FC<IButtonProps> = ({ text, onClick }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
