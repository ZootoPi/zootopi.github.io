import React from "react";

type Props = {
  width?: string | number;
  height?: string | number;
  style?: string;
};

export default function Item1({
  width = "100%",
  height = "100%",
}: Props): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 575 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.67"
        d="M429.545 6.70003C394.643 14.7776 361.818 30.0723 333.183 51.6C273.37 96.753 249.774 155.575 249.317 212.786C249.164 231.815 251.375 250.93 247.454 269.819C243.533 288.708 232.805 307.782 210.395 321.519C177.356 341.779 125.675 346.97 86.883 363.339C53.707 377.339 31.717 398.864 17.197 421.292C10.6661 431.28 5.16332 441.903 0.772949 453H576.22L577 8.37203C540.036 -2.69997 468.096 -2.30596 429.545 6.70003Z"
        fill="#FEBC10"
      />
    </svg>
  );
}
