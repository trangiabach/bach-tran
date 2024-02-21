'use client';

import { inViewThreshold } from '@/consts/ui';
import { useInView } from 'framer-motion';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { FadeIn } from '../common/animations/FadeIn';
import { projectSection } from '../common/navbar/consts';
import { useNavbar } from '../context/NavbarProvider';
import { useWindowWidth } from '@react-hook/window-size';

const projectId = projectSection.href?.replace('#', '');

export const ProjectsContainer: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const width = useWindowWidth();

  const isInView = useInView(ref, {
    amount: width < 768 ? 0.05 : inViewThreshold / 5,
  });

  const { setCurrentSectionName } = useNavbar();

  useEffect(() => {
    if (isInView) {
      setCurrentSectionName(projectSection.title.toLowerCase());
    }
  }, [isInView]);

  return (
    <FadeIn>
      <div ref={ref} className='flex w-full justify-center' id={projectId}>
        <div className='w-full max-w-[1100px]'>{children}</div>
      </div>
    </FadeIn>
  );
};
