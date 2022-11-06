import React from "react";
import styles from "./index.module.css";

export default function TagLine({ ...style }): JSX.Element {
  return (
    <div
      className={styles.tagLineContainer}
      style={{
        ...style,
      }}
    >
      <span
        className={styles.tagLineText}
        style={{
          color: "#FAD007",
        }}
      >
        Share{" "}
      </span>
      <span className={styles.tagLineText}>what </span>
      <span className={styles.tagLineText}>we </span>
      <span
        className={styles.tagLineText}
        style={{
          color: "#EF5123",
        }}
      >
        love!
      </span>
    </div>
  );
}
