import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

type LogoProps = {
  width?: string | number;
  height?: string | number;
  style?: string;
};

export default function NextPageIcon({
  width = "100%",
  height = "100%",
  style = "",
}: LogoProps): JSX.Element {
  const { colorMode } = useColorMode();
  if (!style) {
    style = colorMode;
  }
  const color = style === "light" ? "black" : "white";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6932 0.493011L12.0002 9.15501L3.30721 0.493011L0.637207 3.16001L12.0002 14.507L23.3632 3.16001L20.6932 0.493011Z"
        fill={color}
      />
      <path
        d="M20.6932 13.493L12.0002 22.155L3.30721 13.493L0.637207 16.16L12.0002 27.507L23.3632 16.16L20.6932 13.493Z"
        fill={color}
      />
    </svg>
  );
}
