import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import type { Props } from "@theme/Footer/Logo";

import styles from "./styles.module.css";
import Logo from "@site/src/components/Logo";

export default function FooterLogo({ logo }: Props): JSX.Element {
  return logo.href ? (
    <Link
      href={logo.href}
      className={styles.footerLogoLink}
      target={logo.target}
      style={{
        width: logo.width ? logo.width : "50px",
        height: logo.height ? logo.height : "50px",
      }}
    >
      <Logo />
    </Link>
  ) : (
    <Logo
      width={logo.width ? logo.width : "50px"}
      height={logo.height ? logo.height : "50px"}
    />
  );
}
