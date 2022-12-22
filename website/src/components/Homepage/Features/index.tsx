import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import CuCaiIcon from "./cucai";
import GaIcon from "./ga";
import BoIcon from "./bo";

type FeatureItem = {
  title: string;
  description: string;
  url: string;
  icon: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tutorials",
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: "Hands-on assignments in all levels.",
    url: "tutorial/python",
    icon: <CuCaiIcon />,
  },
  {
    title: "Projects",
    description: "Real-world fantastic projects by us",
    url: "project/papers",
    icon: <GaIcon />,
  },
  {
    title: "Certificates",
    description: "Reviews about courses and certificates.",
    url: "certificate",
    icon: <BoIcon />,
  },
];

function Feature({ title, description, url, icon }: FeatureItem) {
  return (
    <div className={clsx(styles.featureContainer, "col col--4")}>
      <div className={styles.featureElem}>
        <div className={styles.featureElemContainer}>
          <div className={styles.featureElemImage}>{icon}</div>
          <div className={styles.featureElemText}>
            <p className={styles.featureTitle}>{title}</p>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
        <a href={url} aria-label={description}></a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={clsx(styles.featureList, "row")}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
