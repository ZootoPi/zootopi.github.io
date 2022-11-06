import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FaFacebook, FaGithub } from "react-icons/fa";
import styles from "./index.module.css";

export default function SocialButton({ ...style }): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <div className={styles.buttonContainer} style={{ ...style }}>
      <button
        className={styles.button}
        style={{
          marginRight: "20px",
          backgroundColor: colorMode == "light" ? "#5393FB" : "#FF3A00",
        }}
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
      <button
        className={styles.button}
        style={{ backgroundColor: colorMode == "light" ? "#E7ECF2" : "#FFF" }}
      >
        <a
          href={"https://www.facebook.com/aizootopi"}
          target="_blank"
          className={styles.IconLink}
          style={{ color: colorMode == "light" ? "#5393FB" : "#000" }}
        >
          We are in <div style={{ width: "5px" }} />
          <FaFacebook />
        </a>
      </button>
    </div>
  );
}
