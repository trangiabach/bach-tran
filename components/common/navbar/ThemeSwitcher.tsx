'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FC } from 'react';

interface ThemeSwitcherProps {
  buttonClassName?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ buttonClassName }) => {
  const { setTheme } = useTheme();

  return (
    <div className='absolute right-0'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className={cn('shadow-none', buttonClassName)}
          >
            <Sun className='h-[1em] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:h-[1.2rem] md:w-[1.2rem]' />
            <Moon className='absolute h-[1em] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 md:h-[1.2rem] md:w-[1.2rem]' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel className='ml-2 py-1 text-sm font-semibold'>
            🤩 Themes
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
