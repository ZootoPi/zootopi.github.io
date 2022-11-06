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
    url: "tutorial/python/anaconda",
    icon: <CuCaiIcon />,
  },
  {
    title: "Projects",
    description: "Real-world fantastic projects by us",
    url: "project",
    icon: <BoIcon />,
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
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              width: "100px",
              margin: "10px",
            }}
          >
            {icon}
          </div>

          <div
            style={{
              width: "300px",
            }}
          >
            <p
              style={{
                color: "#4776BA",
                fontSize: "2rem",
                fontWeight: "500",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#000",
              }}
            >
              {description}
            </p>
          </div>
        </div>
        <a href={url} aria-label={description}></a>
      </div>
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
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
