import { ChangeEvent } from "react";
import "./RangeInput.modules.scss";

interface IRangeInputProps {
  label: string;
  value?: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string | number;
  name: string;
  showValue?: boolean;
  ordinalNumber?: number;
  min?: number;
  max?: number;
}

const RangeInput: React.FC<IRangeInputProps> = ({
  label,
  onChange,
  value,
  id,
  name,
  showValue = true,
  ordinalNumber,
  min = 0,
  max = 100,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(
      +e.target.value <= max
        ? e
        : ({
            ...e,
            target: { ...e.target, value },
          } as unknown as ChangeEvent<HTMLInputElement>)
    );

  return (
    <div className="range-input">
      <p className="range-input__title">
        {ordinalNumber} {label && <label htmlFor={String(id)}>{label}</label>}:{" "}
        {(showValue && value) ?? 0}%
      </p>
      <input
        name={name}
        id={String(id)}
        onChange={handleChange}
        value={value}
        type="range"
      ></input>
    </div>
  );
};

export default RangeInput;
