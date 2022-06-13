import {Dispatch, FC, SetStateAction} from 'react';


interface Props {
    timeFormat: string;
    setTimeFormat: Dispatch<SetStateAction<string>>;
}

// Importing Components
import TimeFormatButton from './UI/TimeFormatButton';

const TimeFormatButtons: FC<Props> = ({ timeFormat, setTimeFormat }) => {
    const timeFormats: string[] = ['24h', '7d', '30d', '1y'];
    
    return (
        <section className='flex justify-evenly bg-inactive rounded-full xs:px-10 mt-8 mb-1 mx-6 xs:mx-16'>
            {
                timeFormats.map((format, idx) => {
                    return (
                        <TimeFormatButton key={idx} text={format} timeFormat={timeFormat} setTimeFormat={setTimeFormat} />
                    );
                })
            }
        </section>
    );
};

export default TimeFormatButtons;