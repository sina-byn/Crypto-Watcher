import {FC} from 'react';

// Importing Interfaces
import { HeaderProps } from '../interfaces/interfaces';

// Importing Components
import Navbar from './HomePage/Navbar';

const Header: FC<HeaderProps> = ({ initialSlide, children }) => {
    return (
        <header className='flex flex-col justify-center w-full sticky top-0 left-0 z-20'>
          <Navbar initialSlide={initialSlide} />
          {children}
        </header>
    );
};

export default Header;