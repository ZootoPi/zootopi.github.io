import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

type LogoProps = {
  width?: string | number;
  height?: string | number;
  style?: string;
};

export default function FeatureBackground({
  width = "100%",
  height = "100%",
  style = "",
}: LogoProps): JSX.Element {
  const { colorMode } = useColorMode();
  if (!style) {
    style = colorMode;
  }
  const background = style === "light" ? "#13172D" : "#F6F7F9";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1366 648"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.67"
        d="M1220.54 201.7C1185.64 209.778 1152.82 225.072 1124.18 246.6C1064.37 291.753 1040.77 350.575 1040.32 407.786C1040.16 426.815 1042.37 445.93 1038.45 464.819C1034.53 483.708 1023.8 502.782 1001.39 516.519C968.356 536.779 916.675 541.97 877.883 558.339C844.707 572.339 822.717 593.864 808.197 616.292C801.666 626.28 796.163 636.903 791.773 648H1367.22L1368 203.372C1331.04 192.3 1259.1 192.694 1220.54 201.7Z"
        fill="#FEBC10"
      />
      <path
        opacity="0.42"
        d="M215.761 600.738C313.361 631.561 422.832 618.855 509.338 560.169C631.874 477.039 655.989 280.322 840.012 260.329L840.086 178.575C789.242 123.924 710.766 81.761 640.254 90.199C569.742 98.637 501.464 145.891 430.754 139.799C376.939 135.164 328.919 69.185 284.58 37.764C238.613 5.18898 179.78 -9.47602 119.1 6.87598C66.908 20.942 18.83 88.09 0 144V406C57.515 498.434 118.165 569.915 215.761 600.738Z"
        fill="#0665C1"
      />
    </svg>
  );
}
