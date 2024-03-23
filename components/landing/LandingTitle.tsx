'use client';

import { FadeIn } from '../common/animations/FadeIn';
import { FadeInText } from '../common/animations/FadeInText';
import { MdOutlineWavingHand } from 'react-icons/md';

export const LandingTitle = () => {
  return (
    <FadeIn>
      <div className='flex flex-col items-center gap-y-4 text-[70px] font-semibold md:text-[100px]'>
        <div className='text-center leading-[5.5rem]'>
          <FadeInText
            text=' Hi, I am Bach! '
            icon={MdOutlineWavingHand}
            iconProps={{
              className: 'inline w-[70px] md:w-[80px]',
              color: '#ffde34',
            }}
          />
        </div>
      </div>
    </FadeIn>
  );
};
