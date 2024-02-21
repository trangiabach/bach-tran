'use client';

import { FC } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface FadeInTextProps extends HTMLMotionProps<'span'> {
  text: string;
}

export const FadeInText: FC<FadeInTextProps> = ({ text }) => {
  const texts = text.split('');

  return (
    <>
      {texts.map((char, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: index / 50 }}
          key={index}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};
