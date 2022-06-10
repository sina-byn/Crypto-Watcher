import { FC, useContext } from "react";

// Importing Context + Interfaces
import { AppContext } from "../../context/AppContextProvider";
import { AppCtx } from "../../interfaces/interfaces";

// Importing Interfaces
import { PaginationButtonProps } from "../../interfaces/interfaces";

const PaginationButton: FC<PaginationButtonProps> = ({ id }) => {
  const ctx = useContext<AppCtx | null>(AppContext);

  const clickHandler = () => {
    if (ctx && ctx.setApiPage) {
      ctx.setApiPage(id);
    }
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
