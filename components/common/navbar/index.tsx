import { FadeIn } from '../animations/FadeIn';
import { Logo } from './Logo';
import { Switcher } from './Switcher';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = () => {
  return (
    <>
      <Logo className='visible mx-4 px-1 text-lg md:hidden' />
      <FadeIn className='fixed bottom-0 left-0 z-40 flex w-full items-center py-7 md:sticky md:top-0'>
        <Logo className='hidden md:flex' />
        <div className='flex w-full justify-center'>
          <Switcher />
        </div>
        <ThemeSwitcher buttonClassName='hidden md:flex' />
      </FadeIn>
      <ThemeSwitcher buttonClassName='visible md:hidden absolute mx-4 right-0' />
    </>
  );
};
