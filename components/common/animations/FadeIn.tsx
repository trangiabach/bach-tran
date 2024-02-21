'use client';

import { FC } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

export interface FadeInProps extends HTMLMotionProps<'div'> {}

export const FadeIn: FC<FadeInProps> = ({ children, ...rest }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
