import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  text: string;
  timeFormat: string;
  setTimeFormat: Dispatch<SetStateAction<string>>;
}

const TimeFormatButton: FC<Props> = ({ text, timeFormat, setTimeFormat }) => {
  const clickHandler = (): void => {
    setTimeFormat(text);
  };

  return (
    <button type='button' className={`${text === timeFormat ? "bg-active text-gray-200" : "bg-none text-gray-500"} w-14 text-sm font-bold rounded-full py-1`} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default TimeFormatButton;
