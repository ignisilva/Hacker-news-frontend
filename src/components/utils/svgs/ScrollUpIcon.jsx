import React from "react";
import { ReactComponent as ArrowUp } from "../../../../public/assets/arrowUp.svg";

const ScrollUpIcon = ({ color = "white" }) => {
  return <ArrowUp stroke={color} />;
};

export default ScrollUpIcon;
