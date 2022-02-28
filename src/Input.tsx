import { ChangeEvent, FunctionComponent, useState } from "react";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  type?: HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  value: string;
  regex?: RegExp;
  onChange?: (value: string, isValid: boolean | null) => void;
}

const Input: FunctionComponent<Props> = ({
  type,
  id,
  name,
  value,
  regex,
  onChange,
}) => {
  const [validation, setValidation] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (regex !== undefined) {
      if (regex.test(value)) {
        if (onChange) onChange(value, true);
        setValidation("is-valid");
      } else {
        if (onChange) onChange(value, false);
        setValidation("is-invalid");
      }
    } else {
      if (onChange) onChange(value, null);
      setValidation("");
    }
  };

  return (
    <input
      className={`form-control ${validation}`}
      type={type || "text"}
      id={id}
      name={name}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
