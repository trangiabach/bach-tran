'use client';

import { lazy } from 'react';
import { Card } from '../ui/card';
const Spline = lazy(() => import('@splinetool/react-spline'));
import { LandingExploreButton } from './LandingExploreButton';
import { FadeIn } from '../common/animations/FadeIn';
import { Suspense } from 'react';
import { useTheme } from 'next-themes';
import { Skeleton } from '@/components/ui/skeleton';

const darkGraphic =
  'https://prod.spline.design/Ip7jsUm5KvwAfQKl/scene.splinecode';
const lightGraphic =
  'https://prod.spline.design/l-W3Zs1VcvVnDeSx/scene.splinecode';

export const LandingGraphic = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark' || theme === 'system';

  return (
    <div className='flex flex-col items-center gap-y-3'>
      <FadeIn
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className='relative mx-2 h-[400px] overflow-hidden border-none shadow-none md:mx-0'>
          <Suspense
            fallback={<Skeleton className='h-full w-full rounded-lg' />}
          >
            <Spline scene={isDarkTheme ? darkGraphic : lightGraphic} />
          </Suspense>
        </Card>
      </FadeIn>
      <LandingExploreButton />
    </div>
  );
};
