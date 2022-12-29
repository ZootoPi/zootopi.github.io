import React from "react";
import styles from "./index.module.css";
import Item1 from "./Item1";
import Item2 from "./Item2";

type Props = {
  width?: string | number;
  height?: string | number;
  style?: string;
};

export default function FeatureBackground({
  width = "100%",
  height = "100%",
}: Props): JSX.Element {
  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <div className={styles.item1}>
        <Item1 />
      </div>
      <div className={styles.item2}>
        <Item2 />
      </div>
    </div>
  );
}
