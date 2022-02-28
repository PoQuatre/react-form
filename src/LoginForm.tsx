import { FunctionComponent, useState } from "react";
import Input from "./Input";
import InputCheckbox from "./InputCheckbox";

interface Props {
  onSubmit: (email: string, password: string, stayConnected: boolean) => void;
}

const LoginForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);
  const [validity, setValidity] = useState({ email: false, password: false });

  const onChangeEmail = (value: string, isValid: boolean | null) => {
    setEmail(value);

    if (isValid !== null) {
      setValidity({ email: isValid, password: validity.password });
    }
  };

  const onChangePassword = (value: string, isValid: boolean | null) => {
    setPassword(value);

    if (isValid !== null) {
      setValidity({ email: validity.email, password: isValid });
    }
  };

  return (
    <form onSubmit={() => onSubmit(email, password, stayConnected)}>
      <div>
        <label className="form-label" htmlFor="email">
          Email address
        </label>
        <Input
          type="email"
          id="email"
          regex={/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}
          value={email}
          onChange={onChangeEmail}
        />
      </div>

      <div className="mt-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <Input
          type="password"
          id="password"
          regex={/^.{6,}$/}
          value={password}
          onChange={onChangePassword}
        />
      </div>

      <div className="mt-3 form-check">
        <InputCheckbox
          id="stay-connected"
          checked={stayConnected}
          onChange={(isChecked) => setStayConnected(isChecked)}
        />
        <label className="form-check-label" htmlFor="stay-connected">
          Remember me
        </label>
      </div>

      <input
        type="submit"
        value="Submit"
        className="mt-3 btn btn-primary"
        disabled={!validity.email || !validity.password}
      />
    </form>
  );
};

export default LoginForm;
