import {FC} from 'react';

// Importing Interfaces
import { HeaderProps } from '../interfaces/interfaces';

// Importing Components
import Navbar from './Navbar';

const Header: FC<HeaderProps> = ({ initialSlide, children, selectMode }) => {
    return (
        <header className='flex flex-col justify-center w-full sticky top-0 left-0 z-20 bg-black bg-opacity-90'>
          <Navbar initialSlide={initialSlide} selectMode={selectMode} />
          {children}
        </header>
    );
};

export default Header;