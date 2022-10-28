import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

type FeatureItem = {
  title: string;
  description: string;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tutorials",
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: "Hands-on assignments in all levels.",
    url: "tutorial/python/anaconda",
  },
  {
    title: "Projects",
    description: "Real-world fantastic projects by us",
    url: "project",
  },
  {
    title: "Certificates",
    description: "Reviews about courses and certificates.",
    url: "certificate",
  },
];

function Feature({ title, description, url }: FeatureItem) {
  return (
    <div
      className={clsx(styles.featureElem, "col col--4")}
      style={{
        border: "1px dashed var(--ifm-color-primary)",
        borderRadius: "3px",
        marginRight: "1rem",
        marginTop: "1rem",
        position: "relative",
      }}
    >
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={url} aria-label={description}></a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem 0",
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
