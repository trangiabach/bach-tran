'use client';

import { FC } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { IconBaseProps, IconType } from 'react-icons';

interface FadeInTextProps extends HTMLMotionProps<'span'> {
  text: string;
  icon?: IconType;
  iconProps?: IconBaseProps;
}

export const FadeInText: FC<FadeInTextProps> = ({ text, icon, iconProps }) => {
  const texts = text.split('');
  const IconComponent = icon;
  const isIcon = IconComponent && iconProps;

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
      {isIcon && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: text.length / 50 }}
        >
          <IconComponent {...iconProps} />
        </motion.span>
      )}
    </>
  );
};
