import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  id: number;
  setApiPageNo: Dispatch<SetStateAction<number | undefined>>;
}

const PaginationButton: FC<Props> = ({ id, setApiPageNo }) => {

  const clickHandler = (): void => {
    if (setApiPageNo) setApiPageNo(id);
  };

  return (
    <button
      type='button'
      className='w-8 h-8 bg-gray-100'
      onClick={clickHandler}
    >
      {id}
    </button>
  );
};

export default PaginationButton;
