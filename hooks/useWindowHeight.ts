import { Dispatch, SetStateAction } from "react";

const useWindowHeight = (
  callbackFunction: Dispatch<SetStateAction<boolean>>
): void => {
    window.onscroll = (): void => {
        if (window.scrollY > 1500 && callbackFunction) {
            callbackFunction(true);
        } else {
            callbackFunction(false);
        }
    }
};

export default useWindowHeight;
