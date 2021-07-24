/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

function Footer() {
  const { footer, customField } = useThemeConfig();
  const { copyright } = footer || {};
  const { footer_team, footer_team_url } = customField || {};

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx("footer", {
        "footer--dark": footer.style === "dark",
      })}
    >
      <div className="container">
        <div className="footer__bottom text--center row">
          <span className={styles.footer__tagline + " col"}>
            {"Made with 🧡 by "}
            <a href={footer_team_url} target="_blank">
              {footer_team}
            </a>
          </span>
          {copyright ? (
            <div
              className={styles.footer__copyright + " col"} // Developer provided the HTML, so assume it's safe.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: copyright,
              }}
            />
          ) : null}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
