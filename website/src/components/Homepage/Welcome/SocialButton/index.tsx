import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import styles from "./index.module.css";

export default function SocialButton({ ...style }): JSX.Element {
  return (
    <div className={styles.buttonContainer} style={{ ...style }}>
      <button
        className={styles.button}
        style={{ marginRight: "20px", backgroundColor: "#5393FB" }}
      >
        <a
          href={"https://github.com/ZootoPi"}
          target="_blank"
          className={styles.IconLink}
          style={{ color: "#FFF" }}
        >
          We are in <div style={{ width: "5px" }} />
          <FaGithub />
        </a>
      </button>
      <button className={styles.button} style={{ backgroundColor: "#E7ECF2" }}>
        <a
          href={"https://www.facebook.com/aizootopi"}
          target="_blank"
          className={styles.IconLink}
          style={{ color: "#5393FB" }}
        >
          We are in <div style={{ width: "5px" }} />
          <FaFacebook />
        </a>
      </button>
    </div>
  );
}
