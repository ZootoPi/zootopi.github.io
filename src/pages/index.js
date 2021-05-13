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
          <div className={styles.heroContainer + " col"}>
            <h1 className="hero__title">Share what we love ❤️</h1>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg row"
                href="https://github.com/gafbof"
              >
                <div>We in </div>
                <FaGithub />
              </Link>
            </div>
            <HomepageFeatures />
          </div>
          <div className="col">
            <div className={styles.heroImage}>
              <img src="img/gafbof_team.png" />
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
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
