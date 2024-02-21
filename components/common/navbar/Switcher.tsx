'use client';

import { Card } from '@/components/ui/card';
import { switcherOptions } from './consts';
import { SwitcherOption } from './SwitcherOption';
import { motion } from 'framer-motion';

export const Switcher = () => {
  return (
    <div className='w-full max-w-[300px] items-center justify-center md:max-w-[400px]'>
      <Card className='rounded-3xl px-2 py-1.5'>
        <motion.div className='flex items-center' layout>
          {switcherOptions.map((option) => (
            <SwitcherOption key={option.href} {...option} />
          ))}
        </motion.div>
      </Card>
    </div>
  );
};
