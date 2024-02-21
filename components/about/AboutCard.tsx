'use client';

import { AvatarImage } from '@radix-ui/react-avatar';
import { FadeIn } from '../common/animations/FadeIn';
import { Avatar } from '../ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { AboutText } from './AboutText';

export const AboutCard = () => {
  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <CardTitle>About me</CardTitle>
          <CardDescription>
            Computer Science Major @ University of Pennsylvania
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col-reverse items-center gap-x-10 gap-y-8 md:flex-row'>
          <AboutText />
          <Avatar className='h-full w-full rounded-lg md:w-[40%]'>
            <AvatarImage src='/profile.png' />
          </Avatar>
        </CardContent>
      </Card>
    </FadeIn>
  );
};
