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
import HomepageWelcome from "../components/Homepage/Welcome";

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
        <HomepageWelcome />
      </div>
      <div className={styles.homepageFeatureContainer}>
        <div className={styles.homepageFeatureBackground}>
          <FeatureBackground />
        </div>
        <div
          style={{
            height: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className={styles.homepageFeatureTitle}>
            What we do and what we share
          </div>
          <HomepageFeatures />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
