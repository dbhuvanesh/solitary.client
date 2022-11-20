import React from "react";
import styles from "../stylesheets/Component.module.css";

export default function Form(props) {
  const formbtn = props.formbtn;
  const emailplaceholder = props.emailplaceholder;
  const passwordplaceholder = props.passwordplaceholder;
  const helper = props.helper;
  return (
    <form className={styles.form}>
      <input
        type="email"
        name="email"
        placeholder={emailplaceholder}
        required
      />
      <input
        type="password"
        name="password"
        placeholder={passwordplaceholder}
        required
      />
      <p className={styles.helper}>{helper}</p>
      <button type="submit">{formbtn}</button>
    </form>
  );
}
