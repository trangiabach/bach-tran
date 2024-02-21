'use client';

import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FadeIn } from '../common/animations/FadeIn';
import { aboutSection } from '../common/navbar/consts';
import { useNavbar } from '../context/NavbarProvider';
import { Button } from '../ui/button';

export const LandingExploreButton = () => {
  const { setCurrentSectionName } = useNavbar();
  const router = useRouter();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onExploreClick = () => {
    setCurrentSectionName(aboutSection.title.toLowerCase());
    router.push(`/${aboutSection.href}`);
  };

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <FadeIn whileHover={{ scale: 1.15 }}>
      <Button
        className='text-md gap-x-3'
        variant='outline'
        onClick={onExploreClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Sparkle
          className={cn(
            'transition-all',
            isHovered && 'animate-spin text-primary'
          )}
          size={18}
        />{' '}
        Explore
      </Button>
    </FadeIn>
  );
};
