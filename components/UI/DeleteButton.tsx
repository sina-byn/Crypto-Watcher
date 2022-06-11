import { FC, MouseEvent } from "react";

interface Props {
  id: string | null | undefined;
  ids: string[] | undefined;
  forceUpdate: Function | undefined;
}

const DeleteButton: FC<Props> = ({ id, ids, forceUpdate }) => {
  const deleteHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (id && ids && forceUpdate) {
        const coinIDX = ids.indexOf(id);
        if (coinIDX > -1) {
            ids.splice(coinIDX, 1);
            localStorage.setItem("watchlist", JSON.stringify(ids));
            forceUpdate();
        }
    }
  };

  return (
    <div className='flex items-center h-full' onClick={deleteHandler}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
        className='w-3 fill-gray-200 ml-2 hover:fill-red-500'
      >
        <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
      </svg>
    </div>
  );
};

export default DeleteButton;
