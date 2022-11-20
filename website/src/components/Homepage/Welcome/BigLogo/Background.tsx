import React from "react";

type Props = {
  width?: string | number;
  height?: string | number;
  style?: string;
};

export default function Background({
  width = "100%",
  height = "100%",
}: Props): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 721 649"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.77"
        d="M593.089 14.0015C550.502 -2.00001 503.002 -4.99918 465.966 14.0015C461.002 16.5483 457.702 18.0279 453.736 20.3515C380.268 63.4945 353.241 166.945 273.719 197.522C231.552 213.736 183.919 205.112 139.783 214.768C46.444 235.189 -12.957 341.353 3.12399 435.537C19.205 529.721 97.733 605.582 188.272 636.102C273.331 656.643 429.526 650.477 530.34 620.887C545.246 616.628 559.815 611.268 573.926 604.849C613.581 586.363 633.465 575.886 670.5 522.414C721 449.5 752.002 174 670.5 67.2955C648.501 38.494 621.868 24.8149 593.089 14.0015Z"
        fill="#EF5123"
      />
    </svg>
  );
}
