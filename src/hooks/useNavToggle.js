import { useState } from "react";

const useNavToggle = () => {
  const [navState, setNavState] = useState(false);

  const navToggle = () => {
    setNavState(!navState);
  };

  return [navState, navToggle];
};

export default useNavToggle;
