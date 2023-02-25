import React from "react";
import styles from "./card.module.css";
import image from "../../assets/image-qr-code.png";

const Card = () => {
  return (
    <>
      <div className={styles.containerWrapper}>
        <div className={styles.cardWrapper}>
          <div className={styles.imageWrapper}>
            <img src={image} alt="image-qr-code" />
          </div>
          <div className={styles.textWrapper}>
            <h2>Improve your front-end skills by building projects </h2>
            <p className={styles.description}>
              Scan the HQ code to visit Frontend Mentor and take yout coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
      <div class={styles.footer}>
        <code>
          {" "}
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/maicondguerian" target="_blank">
            maicondlol
          </a>
          .
        </code>
      </div>
    </>
  );
};

export default Card;
