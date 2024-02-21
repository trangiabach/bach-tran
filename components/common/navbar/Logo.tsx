'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { FC } from 'react';

interface LogoProps {
  className?: string;
}

const lightAvatar = '/avatar-light.png';

const darkAvatar = '/avatar-dark.png';

export const Logo: FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();

  const isDarkTheme = theme === 'dark' || theme === 'system';

  return (
    <div
      className={cn(
        'absolute left-0 flex items-center gap-x-2 text-2xl font-semibold',
        className
      )}
    >
      <Avatar className='h-[35px] w-[35px]'>
        <AvatarImage
          src={isDarkTheme ? darkAvatar : lightAvatar}
          alt='Bach Tran Avatar'
        />
      </Avatar>
      Bach Tran
    </div>
  );
};
