'use client';

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '../ui/accordion';
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from '../ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { FC, ReactNode, Ref, useState } from 'react';
import { techIconMap } from './consts';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaAppStore, FaGithub } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { Skeleton } from '../ui/skeleton';
import { TbFileReport } from 'react-icons/tb';
import { PiSlideshowDuotone } from 'react-icons/pi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
} from '../ui/alert-dialog';
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  title: ReactNode;
  subTitle: ReactNode;
  description: ReactNode;
  technologies: string[];
  details: ReactNode;
  graphic: string;
  github?: string;
  videoDemo?: string;
  website?: string;
  report?: string;
  slides?: string;
  instructorGuide?: string;
  studentGuide?: string;
  app?: string;
  ref?: Ref<HTMLDivElement>;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subTitle,
  description,
  technologies,
  details,
  graphic,
  github,
  videoDemo,
  website,
  report,
  slides,
  instructorGuide,
  studentGuide,
  app,
  ref,
  ...rest
}) => {
  const [isGraphicHovered, setIsGraphicHovered] = useState<boolean>(false);

  const onMouseEnterGraphic = () => setIsGraphicHovered(true);

  const onMouseLeaveGraphic = () => setIsGraphicHovered(false);

  return (
    <Card {...rest}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className='md:text-md flex flex-col-reverse items-center gap-4 text-sm md:flex-row md:gap-8'>
        <div className='flex w-full flex-col' ref={ref}>
          <div className='text-md'>{description}</div>
          <div className='py-2' />
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech) => {
              const TechIcon = techIconMap[tech];

              return (
                <Badge key={tech} className='gap-x-1' variant='outline'>
                  {TechIcon && <TechIcon />}
                  {tech}
                </Badge>
              );
            })}
          </div>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>⚙️ More details</AccordionTrigger>
              <AccordionContent>{details}</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className='py-2' />
          <div className='flex flex-wrap gap-2'>
            {instructorGuide && (
              <Link href={instructorGuide} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <FaChalkboardTeacher /> Instructor guide
                </Button>
              </Link>
            )}
            {studentGuide && (
              <Link href={studentGuide} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <PiStudent /> Student guide
                </Button>
              </Link>
            )}
            {videoDemo && (
              <Link href={videoDemo} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <MdOndemandVideo /> Video demo
                </Button>
              </Link>
            )}
            {website && (
              <Link href={website} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <CgWebsite /> Website
                </Button>
              </Link>
            )}
            {app && (
              <Link href={app} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <FaAppStore /> App Store
                </Button>
              </Link>
            )}
            {github && (
              <Link href={github} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <FaGithub /> Github
                </Button>
              </Link>
            )}
            {report && (
              <Link href={report} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <TbFileReport /> Report
                </Button>
              </Link>
            )}
            {slides && (
              <Link href={slides} target='_blank'>
                <Button className='flex gap-x-1' variant='outline'>
                  <PiSlideshowDuotone /> Slides
                </Button>
              </Link>
            )}
          </div>
        </div>
        <Avatar className='relative h-auto w-full rounded-lg border border-secondary shadow-sm md:w-[45%]'>
          {graphic && graphic.length !== 0 && (
            <AvatarImage
              onMouseEnter={onMouseEnterGraphic}
              onMouseLeave={onMouseLeaveGraphic}
              className='aspect-auto hover:cursor-pointer'
              src={graphic}
            />
          )}
          <AvatarFallback className='rounded-none'>
            <Skeleton className='h-[200px] w-full' />
          </AvatarFallback>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                onMouseEnter={onMouseEnterGraphic}
                onMouseLeave={onMouseLeaveGraphic}
                variant='outline'
                className={cn(
                  'absolute right-2 top-2 px-2 py-0 text-[0.7rem] transition-opacity',
                  isGraphicHovered ? 'opacity-100' : 'opacity-0'
                )}
              >
                In-depth view
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='h-auto w-[95%] md:w-full md:max-w-[1000px]'>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>
                {graphic && graphic.length !== 0 && (
                  <AvatarImage
                    className='aspect-auto rounded-lg'
                    src={graphic}
                  />
                )}
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Exit in-depth view</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Avatar>
      </CardContent>
    </Card>
  );
};
