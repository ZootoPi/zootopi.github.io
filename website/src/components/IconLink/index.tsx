import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

type Props = {
  readonly icon?: React.ReactNode;
  readonly text: string;
  readonly href: string;
};

export default function IconLink({ icon, text, href }: Props): JSX.Element {
  return (
    <a href={href} className={clsx("footer__link-item", styles.IconLink)}>
      {icon}
      {icon && <div style={{ width: "5px" }} />}
      {text}
    </a>
  );
}
