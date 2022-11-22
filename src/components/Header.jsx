import React from "react";
import styles from "../stylesheets/Component.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerwrapper}>
        <h1 className={styles.heading}>solitary</h1>
      </div>
    </header>
  );
}
