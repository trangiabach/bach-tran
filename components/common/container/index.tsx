'use client';

import { NavbarProvider } from '@/components/context/NavbarProvider';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
      <NavbarProvider>
        <div className='min-h-screen w-full px-3 pt-0 md:px-10'>{children}</div>
      </NavbarProvider>
    </ThemeProvider>
  );
};
