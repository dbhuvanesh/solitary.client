import React from "react";
import Twitter from "../assets/icons/twitter.svg";
import Github from "../assets/icons/github.svg";
import styles from "../stylesheets/Component.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerwrapper}>
        <div className={styles.footericon}>
          <img src={Twitter} className={styles.socialicons} />
          <img src={Github} className={styles.socialicons} />
        </div>
      </div>
      <div className={styles.footerinfo}>
        <h1 className={styles.footerinfosection}>
          We're working on something which is more important than all of us
        </h1>
        <p className={styles.endsection}>Copyright © 2022 Bhuvanesh Duvvuri</p>
      </div>
    </footer>
  );
}
