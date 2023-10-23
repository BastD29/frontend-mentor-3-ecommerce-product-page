import { useState, FC } from "react";
import styles from "./Select.module.scss";

type OptionType = {
  label: string;
  value: string;
};

type SelectComponentProps = {
  options: OptionType[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  id?: string;
};

const Select: FC<SelectComponentProps> = ({
  options,
  value,
  onChange,
  label,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value) || {
    label: "",
    value: "",
  };

  return (
    <div className={styles["select"]}>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className={styles["select__selected-option"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.label}
      </div>
      {isOpen && (
        <div className={styles["select__options"]}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles["select__option"]}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
