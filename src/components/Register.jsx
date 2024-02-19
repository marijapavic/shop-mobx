import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { RegisterStore } from "../store/RegisterStore";
import form from "../utils/registerForm";

const Register = observer(() => {
  return (
    <div className="register-page">
      <h2>Sign up</h2>
      <div className="register-container">
        <input
          className="input"
          placeholder="Username"
          onChange={(e) => (form.$("name").value = e.target.value)}
          {...form.$("name").bind()}
        />
        <p className="p-error">{form.$("name").error}</p>
        <input
          className="input"
          placeholder="Email"
          type="email"
          onChange={(e) => (form.$("email").value = e.target.value)}
          {...form.$("email").bind()}
        />
        <p className="p-error">{form.$("email").error}</p>
        <input
          className="input"
          placeholder="Password"
          type="password"
          onChange={(e) => (form.$("password").value = e.target.value)}
          {...form.$("password").bind()}
        />
        <p className="p-error">{form.$("password").error}</p>
        <Link to="/">
          <button
            className="submit-btn"
            onClick={() => RegisterStore.onRegister()}
          >
            Sign up
          </button>
        </Link>
      </div>
      <p>
        Already registered?{" "}
        <Link to="/signin" className="text">
          Sign in
        </Link>
      </p>
    </div>
  );
});

export default Register;
