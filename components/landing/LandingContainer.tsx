'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useNavbar } from '../context/NavbarProvider';
import { homeOption } from '../common/navbar/consts';
import { inViewThreshold } from '@/consts/ui';

const homeId = homeOption.href?.replace('#', '');

export const LandingContainer: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: inViewThreshold });
  const { setCurrentSectionName } = useNavbar();

  useEffect(() => {
    if (isInView) {
      setCurrentSectionName(homeOption.title.toLowerCase());
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className='flex w-full justify-center pt-[100px] md:pt-[80px]'
      id={homeId}
    >
      <div className='flex w-full max-w-[800px] flex-col items-center gap-y-8'>
        {children}
      </div>
    </div>
  );
};
