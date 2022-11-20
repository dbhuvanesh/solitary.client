import React from "react";
import styles from "../stylesheets/Component.module.css";

export default function HeroSection(props) {
  const herosectiontitle = props.herosectiontitle;
  const herosectioninfo = props.herosectioninfo;
  return (
    <div className={styles.herosection}>
      <h1 className={styles.herosectiontitle}>{herosectiontitle}</h1>
      <p className={styles.herosectioninfo}>{herosectioninfo}</p>
    </div>
  );
}
