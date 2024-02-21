'use client';

import { cn, removeEmoji } from '@/lib/utils';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useNavbar } from '../../context/NavbarProvider';

export interface SwitcherOptionProps {
  title: string;
  href?: string;
}

export const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

export const SwitcherOption: FC<SwitcherOptionProps> = ({ title, href }) => {
  const { currentSectionName, setCurrentSectionName } = useNavbar();

  const isSelected = currentSectionName === title.toLowerCase();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onOptionEnter = () => {
    setIsHovered(true);
  };

  const onOptionLeave = () => {
    setIsHovered(false);
  };

  const onOptionClick = () => {
    setCurrentSectionName(title.toLowerCase());
    const id = removeEmoji(title).trim().toLowerCase();
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      className='grow'
      href={href || ''}
      shallow
      onMouseEnter={onOptionEnter}
      onMouseLeave={onOptionLeave}
      onClick={onOptionClick}
    >
      <div
        className={cn(
          'rounded-4xl relative flex justify-center py-1.5',
          isSelected && 'text-white dark:text-black'
        )}
      >
        <span className='md:text-md z-20 text-xs'>{title}</span>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className='absolute bottom-0 top-0 z-0 w-full rounded-2xl bg-secondary'
              layoutId='switcher-hover-block'
              transition={spring}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        {isSelected && (
          <motion.div
            className='absolute bottom-0 top-0 z-10 w-full rounded-2xl bg-black dark:bg-white'
            layoutId='switcher-click-block'
            transition={spring}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </Link>
  );
};
