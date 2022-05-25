import { useEffect, useState } from "react";
import { apiPost } from "../../services/api";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    apiPost("/users", { user }).then(
      (response) => {
        console.log("this", response);
      },
      (error) => {
        console.log(error);
        alert(error.request.responseText)
      }
    );
  };

  return (
    <div>
      <h1>Register</h1>

      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password confirmation:
          <input
            type="password"
            name="password-confirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
