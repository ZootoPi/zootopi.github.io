import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import Logo from "@site/src/components/Logo";
import styles from "./index.module.css";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <footer
      className={clsx(styles.footerHomepage, "footer", {
        "footer--dark": colorMode === "dark",
      })}
    >
      <div className="row">
        <div className="col col--4">
          <div className={clsx(styles.footerLogo, "col")}>
            <Logo width="50px" height="50px" style={colorMode} />
            {copyright && <span>{copyright}</span>}
          </div>
        </div>
        <div className="col col--4">
          <div className={styles.footerLinks}></div>
        </div>
        <div className="col col--4">
          <div className={styles.footerTagline}>
            <div>
              <span>Made with </span>
              <span>❤️</span>
              <span> by ZootoPi team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
