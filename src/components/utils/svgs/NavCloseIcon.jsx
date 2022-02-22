import React from "react";
import { ReactComponent as Substract } from "../../../../public/assets/substract.svg";

const NavCloseIcon = ({ width = 24, height = 24, color = "black" }) => {
  return <Substract width={width} height={height} stroke={color} />;
};

export default NavCloseIcon;
