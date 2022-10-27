import React, { ReactNode } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import Tagline from "@site/src/theme/Footer/Tagline";
import styles from "./index.module.css";
import IconLink from "@site/src/components/IconLink";
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
            <div className={clsx(styles.footerLinks, "col col--6")}>
              {links}
            </div>
            <div className={clsx(styles.footerSocial, "col col--6")}>
              <div className={styles.footerSocialContainer}>
                <IconLink
                  icon={<FaFacebook />}
                  text="Facebook"
                  href="https://github.com"
                />
                <IconLink
                  icon={<FaGithub />}
                  text="Github"
                  href="https://github.com"
                />
                <IconLink
                  icon={<FaYoutube />}
                  text="Youtube"
                  href="https://github.com"
                />
              </div>
            </div>
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
