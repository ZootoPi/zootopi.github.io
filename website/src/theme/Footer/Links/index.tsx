import React from "react";

import {
  FooterLinkItem,
  isMultiColumnFooterLinks,
} from "@docusaurus/theme-common";
import { Props } from "@theme/Footer/Links";
import styles from "./index.module.css";
import IconLink from "@site/src/components/IconLink";
import clsx from "clsx";

function SimpleFooterLink({
  links,
  padding = false,
}: {
  links: FooterLinkItem[];
  padding?: boolean;
}): JSX.Element {
  return (
    <div
      className={
        padding
          ? clsx(styles.footerLinksColumn, styles.footerLinksColumnPadding)
          : styles.footerLinksColumn
      }
    >
      {links.map((item, key) => (
        <IconLink key={key} text={item.label} href={item.href} />
      ))}
    </div>
  );
}

export default function FooterLinks({ links }: Props): JSX.Element {
  return isMultiColumnFooterLinks(links) ? (
    <div className={styles.footerLinksContainer}>
      {links.map((linkItem, i) => (
        <SimpleFooterLink key={i} links={linkItem.items} padding={i !== 0} />
      ))}
    </div>
  ) : (
    <div>
      <div className={styles.footerLinksContainer}>
        <SimpleFooterLink links={links} />
      </div>
    </div>
  );
}
