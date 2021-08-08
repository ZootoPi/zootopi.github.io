import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { FaGithub } from "react-icons/all";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

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
              <img src="img/zootopi_team.svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
