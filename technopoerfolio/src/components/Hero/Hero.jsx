import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is TDDC</h1>
        <p className={styles.description}>
          ELEVATING LEARNING THROUGH TECH
        </p>
        <a href="mailto:techdynamo.24gmail.com" className={styles.contactBtn}>
          Reach Us
        </a>
      </div>
      <img
        src={getImageUrl("hero/tddc.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
