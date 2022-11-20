import React from "react";
import styles from "./index.module.css";
import Background from "./Background";
import Pi from "./Pi";

type LogoProps = {
  width?: string | number;
  height?: string | number;
};

export default function BigLogo({
  width = "100%",
  height = "100%",
}: LogoProps): JSX.Element {
  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <div className={styles.background}>
        <Background />
      </div>
      {/* <div className={styles.pi}>
        <Pi />
      </div> */}
    </div>
  );
}
