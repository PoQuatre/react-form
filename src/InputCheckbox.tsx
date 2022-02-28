import { FunctionComponent } from "react";

interface Props {
  id?: string;
  name?: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const InputCheckbox: FunctionComponent<Props> = ({
  id,
  name,
  checked,
  onChange,
}) => {
  return (
    <input
      className="form-check-input"
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default InputCheckbox;
