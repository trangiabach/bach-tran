'use client';

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';

interface NavbarContext {
  currentSectionName: string;
  setCurrentSectionName: (name: string) => void;
}

export const defaultNavbarContext: NavbarContext = {
  currentSectionName: '🏡 home',
  setCurrentSectionName: () => null,
};

export const NavbarContext = createContext<NavbarContext>(defaultNavbarContext);

interface NavbarContextProviderProps extends PropsWithChildren {}

export const NavbarProvider: FC<NavbarContextProviderProps> = ({
  children,
}) => {
  const [currentSectionName, setCurrentSectionName] = useState<string>('');

  const value = useMemo(
    () => ({
      currentSectionName,
      setCurrentSectionName,
    }),
    [currentSectionName, setCurrentSectionName]
  );

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext<NavbarContext>(NavbarContext);
