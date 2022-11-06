import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Homepage/Features";
import { FaGithub } from "react-icons/fa";

import styles from "./index.module.css";
import BigLogo from "../components/Homepage/Welcome/BigLogo";
import FeatureBackground from "../components/Homepage/Features/Background";
import Footer from "@theme/Footer";
import NextPageIcon from "../components/Homepage/Welcome/NextPageIcon";
import TagLine from "../components/Homepage/Welcome/TagLine";
import SocialButton from "../components/Homepage/Welcome/SocialButton";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx(styles.heroContainer, "col")}>
            <h1 className={styles.heroTitle}>
              <span>Share </span>
              what we
              <span> love ❤️</span>
            </h1>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg row"
                href="https://github.com/zootopi"
              >
                <div>We in </div>
                <FaGithub />
              </Link>
            </div>
            <HomepageFeatures />
          </div>
          <div className="col">
            <div className={styles.heroImage}>
              <img alt="Zootopi team" src="img/zootopi_team.svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
      wrapperClassName={styles.homepageContainer}
      noFooter
    >
      <div className={styles.homepageWelcome}>
        <div className={styles.homepageBigLogo}>
          <BigLogo />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <TagLine paddingLeft="60px" />
          <SocialButton marginTop="80px" />
        </div>
        <div className={styles.homepageNextPage}>
          <NextPageIcon width="30px" />
        </div>
      </div>
      <div className={styles.homepageFeatureContainer}>
        <div className={styles.homepageFeatureBackground}>
          <FeatureBackground />
        </div>
        <div style={{ height: "100%" }}></div>
        <Footer />
      </div>
    </Layout>
  );
}
