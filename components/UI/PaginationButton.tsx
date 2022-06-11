import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  id: number;
  apiPageNo: number;
  setApiPageNo: Dispatch<SetStateAction<number>>;
}

const PaginationButton: FC<Props> = ({ id, apiPageNo, setApiPageNo }) => {
  const clickHandler = (): void => {
    if (setApiPageNo) setApiPageNo(id);
  };

  return (
    <button
      type='button'
      className={`${apiPageNo === id ? "bg-black text-gray-200 border-2 border-gray-200" : "bg-gray-100"} w-8 h-8`}
      onClick={clickHandler}
    >
      {id}
    </button>
  );
};

export default PaginationButton;
