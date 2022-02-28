import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (
    email: string,
    password: string,
    stayConnected: boolean
  ) => {
    setSubmitted(true);

    console.log({ email, password, stayConnected });
  };

  return (
    <div className="container-md">
      <h1 className="text-center mt-4">Login</h1>
      {submitted ? (
        <h2
          style={{
            padding: "4rem",
            backgroundColor: "lightgray",
            textAlign: "center",
          }}
        >
          Form submitted
        </h2>
      ) : (
        <LoginForm onSubmit={onSubmit} />
      )}
    </div>
  );
}

export default App;
