import React, { ReactNode } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import Tagline from "@site/src/theme/Footer/Tagline";
import styles from "./index.module.css";
export interface Props {
  readonly links: ReactNode;
  readonly logo: ReactNode;
  readonly copyright: ReactNode;
}

export default function FooterLayout({
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
            {logo}
            {copyright}
          </div>
        </div>
        <div className="col col--4">
          <div className="row">
            <div className={clsx(styles.footerLinks, "col col--6")}></div>
            <div className={clsx(styles.footerSocial, "col col--6")}></div>
          </div>
        </div>
        <div className="col col--4">
          <div className={styles.footerTagline}>
            <Tagline />
          </div>
        </div>
      </div>
    </footer>
  );
}
