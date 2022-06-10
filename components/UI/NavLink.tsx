import { FC } from "react";

interface Props {
  text: string;
}

const NavLink: FC<Props> = ({ text }) => {
  return <p>{text}</p>;
};

export default NavLink;
