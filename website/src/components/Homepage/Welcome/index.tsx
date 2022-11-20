import React from "react";
import styles from "./index.module.css";
import BigLogo from "./BigLogo";
import NextPageIcon from "./NextPageIcon";
import SocialButton from "./SocialButton";
import TagLine from "./TagLine";
import Pi from "./BigLogo/Pi";

export default function HomepageWelcome(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={styles.homepageBigLogo}>
        <BigLogo />
      </div>
      <div className={styles.homepageWelcomeContent}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <TagLine />
              <div className={styles.homepageWelcomeSocialButton}>
                <SocialButton />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.piContainer}>
          <div className={styles.pi}>
            <Pi />
          </div>
        </div>
      </div>
      <div
        className={styles.homepageNextPage}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <NextPageIcon width="30px" />
      </div>
    </div>
  );
}
