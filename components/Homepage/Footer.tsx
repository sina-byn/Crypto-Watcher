import { FC } from "react";
import PaginationButton from "../UI/PaginationButton";

const Footer: FC = () => {
  return (
    <footer className="flex items-center justify-center gap-x-5 w-full max-w-sm h-16 fixed bottom-0 bg-black bg-opacity-90 mx-auto">
      <PaginationButton id={1} />
      <PaginationButton id={2} />
      <PaginationButton id={3} />
      <PaginationButton id={4} />
      <PaginationButton id={5} />
    </footer>
  );
};

export default Footer;
