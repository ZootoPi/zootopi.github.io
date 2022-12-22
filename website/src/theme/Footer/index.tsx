import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@site/src/theme/Footer/Layout";

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo } = footer;

  return (
    <FooterLayout
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default React.memo(Footer);
