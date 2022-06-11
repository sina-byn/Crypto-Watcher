import { useState } from "react";

const useForceUpdate = (): Function => {
  const [value, setValue] = useState<number>(0);
  const newValue: number = value + 1;
  return (): void => setValue(newValue);
};

export default useForceUpdate;
