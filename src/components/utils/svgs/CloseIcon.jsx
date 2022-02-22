import React from "react";
import { ReactComponent as Multiply } from "../../../../public/assets/multiply.svg";

const CloseIcon = ({ width = 24, height = 24, color = "black" }) => {
  return <Multiply width={width} height={height} fill={color} />;
};

export default CloseIcon;
