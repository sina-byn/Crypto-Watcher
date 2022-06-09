import { FC } from "react";

const ScrollTopButton: FC = () => {
  const clickHandler = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <button
      type='button'
      className='w-8 h-8 bg-gray-200 sticky bottom-10 rounded-full px-2 ml-10 md:-ml-8'
      onClick={clickHandler}
    >
      <img src='/icons/chevron-up.svg' alt='Chevron Top Icon' />
    </button>
  );
};

export default ScrollTopButton;
