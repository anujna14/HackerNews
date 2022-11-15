import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./UserLogin.module.css";
import { commonConstants } from "../../Constants/string.constant";

interface User {
  username: string;
  password: string;
}
const UserLogin = () => {
  const navigate = useNavigate();
  const [loginInput, setloginInput] = useState<User>({
    username: "",
    password: "",
  });

  const loginUsernameRef = useRef<HTMLInputElement>(null!);
  const loginPasswordRef = useRef<HTMLInputElement>(null!);

  const handleSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setloginInput({
      username: loginUsernameRef.current?.value,
      password: loginPasswordRef.current?.value,
    });
    if (loginInput.username.trim().length === 0 || loginInput.password?.trim().length === 0) {
      return alert("UserName and password cannot be empty");
    }
    navigate("/");
  };
  return (
    <div className={classes["input-container"]}>
      <form onSubmit={handleSubmitHandler}>
        <h3>{commonConstants.Login}</h3>
        <label className={classes["detail"]}>{commonConstants.username}</label>
        <input ref={loginUsernameRef} className={classes["detail"]} type="text" />
        <br />

        <label className={classes["detail"]}>{commonConstants.password}</label>
        <input ref={loginUsernameRef} className={classes["detail"]} type="password" />

        <div className={classes["login-button"]}>
          <button type="submit">{commonConstants.Login}</button>
        </div>
      </form>

      <Link to="#">{commonConstants.ForgotYourPassword}</Link>

      <form onSubmit={handleSubmitHandler}>
        <h3>{commonConstants.CreateAccount}</h3>

        <label className={classes["detail"]}>{commonConstants.username}</label>
        <input className={classes["detail"]} type="text" />

        <br />

        <label className={classes["detail"]}>{commonConstants.password}</label>
        <input className={classes["detail"]} type="password" />

        <div className={classes["submit-button"]}>
          <button type="submit">{commonConstants.CreateAccount}</button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
