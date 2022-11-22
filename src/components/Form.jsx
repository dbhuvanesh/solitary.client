import React, { useState } from "react";
import validator from "validator";
import styles from "../stylesheets/Component.module.css";

export default function Form(props) {
  const formbtn = props.formbtn;
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const emailplaceholder = props.emailplaceholder;
  const passwordplaceholder = props.passwordplaceholder;
  const helper = props.helper;
  const datahandler = () => {
    if (Email === "" || Password === "") {
      alert("Empty fields");
    } else if (validator.isEmail || validator.isAlphanumeric) {
      console.log(Email, Password);
    }
  };
  return (
    <div className={styles.form}>
      <input
        type="email"
        name="email"
        placeholder={emailplaceholder}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        autoComplete="false"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder={passwordplaceholder}
        required
        autoComplete="false"
      />
      <p className={styles.helper}>{helper}</p>
      <button type="submit" onClick={datahandler}>
        {formbtn}
      </button>
    </div>
  );
}
