'use client';

import { inViewThreshold } from '@/consts/ui';
import { useInView } from 'framer-motion';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { aboutSection } from '../common/navbar/consts';
import { useNavbar } from '../context/NavbarProvider';
import { useWindowWidth } from '@react-hook/window-size';

const aboutId = aboutSection.href?.replace('#', '');

export const AboutContainer: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const width = useWindowWidth();

  const isInView = useInView(ref, {
    amount: width < 768 ? 0.3 : inViewThreshold,
  });

  const { setCurrentSectionName } = useNavbar();

  useEffect(() => {
    if (isInView) {
      setCurrentSectionName(aboutSection.title.toLowerCase());
    }
  }, [isInView]);

  return (
    <div className='flex w-full justify-center' ref={ref} id={aboutId}>
      <div className='w-full max-w-[1100px]'>{children}</div>
    </div>
  );
};
