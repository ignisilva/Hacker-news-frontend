import React from "react";
import { ReactComponent as Plus } from "../../../../public/assets/plus.svg";

const NavOpenIcon = ({ width = 24, height = 24, color = "black" }) => {
  return <Plus width={width} height={height} stroke={color} />;
};

export default NavOpenIcon;
