import {FC} from 'react';
import Link from 'next/link';

// Importing Interfaces
import { NavLinkProps } from '../../interfaces/interfaces';

const NavLink: FC<NavLinkProps> = ({ id, text, href }) => {

    return (
        <Link href={href}>
            <a className=''>
                {text}
            </a>
        </Link>
    );
};

export default NavLink;