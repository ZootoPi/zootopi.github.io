import React, { ReactNode } from "react";
import clsx from "clsx";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import Tagline from "@site/src/theme/Footer/Tagline";
import styles from "./index.module.css";
import IconLink from "@site/src/components/IconLink";
import { useLocation } from "@docusaurus/router";
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
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <footer className={clsx(isHomepage && styles.footerHomepage, "footer")}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          {logo}
          {copyright}
        </div>
        <div className={styles.footerSocialLinks}>
          <div className={styles.footerLinks}>{links}</div>
          <div className={styles.footerSocial}>
            <div className={styles.footerSocialContainer}>
              <IconLink
                icon={<FaFacebook />}
                text="Facebook"
                href="https://www.facebook.com/aizootopi"
              />
              <IconLink
                icon={<FaGithub />}
                text="Github"
                href="https://github.com/ZootoPi"
              />
              <IconLink
                icon={<FaYoutube />}
                text="Youtube"
                href="https://www.youtube.com/@zootopi4315"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerTagline}>
          <Tagline />
        </div>
      </div>
    </footer>
  );
}
