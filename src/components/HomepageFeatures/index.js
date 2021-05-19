import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

const FeatureList = [
  {
    title: "Tutorials",
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: "Hands-on assignments in all levels.",
    url: "docs/intro",
  },
  {
    title: "Projects",
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: "Real-world fantastic projects by us",
    url: "docs/intro",
  },
  {
    title: "Certificates",
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: "Reviews about courses and certificates.",
    url: "docs/intro",
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx(styles.featureElem, "col")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}

      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={url}></a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
