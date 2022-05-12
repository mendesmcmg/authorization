import { useEffect, useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    console.log("RegisterPage mounted");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RegisterPage handleSubmit");
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
