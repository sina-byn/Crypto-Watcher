import { Dispatch, SetStateAction, useEffect } from "react";

const useWindowScrollY = (
  hookDependency: boolean,
  callbackFunction: Dispatch<SetStateAction<boolean>>
): void => {
  useEffect(() => {
    window.onscroll = (): void => {
      if (window.scrollY > 1500 && callbackFunction) {
        callbackFunction(true);
      } else {
        callbackFunction(false);
      }
    };
  }, [hookDependency]);
};

export default useWindowScrollY;
