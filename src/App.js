import "./App.css";

import { useState } from "react";

import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && email && password && confirmpassword) {
      if (password === confirmpassword) {
        setValid(true);
      } else {
        alert("Les deux mots de passe ne correspondent pas");
      }
    }
  };

  return (
    <div className="App">
      {valid === false ? (
        <Form
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmpassword={confirmpassword}
          setConfirmPassword={setConfirmPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Results
          name={name}
          email={email}
          password={password}
          setValid={setValid}
        />
      )}
    </div>
  );
}

export default App;
