'use client';

import { inViewThreshold } from '@/consts/ui';
import { useInView } from 'framer-motion';
import { Book, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { GrGithub } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { resumeSection } from '../common/navbar/consts';
import { useNavbar } from '../context/NavbarProvider';
import { Button } from '../ui/button';

const resumeId = resumeSection.href?.replace('#', '');

export const ResumeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: inViewThreshold });
  const { setCurrentSectionName } = useNavbar();

  useEffect(() => {
    if (isInView) {
      setCurrentSectionName(resumeSection.title.toLowerCase());
    }
  }, [isInView]);

  return (
    <div className='flex flex-col items-center gap-y-8' ref={ref} id={resumeId}>
      <div className='text-2xl md:text-[40px]'>Download resume 📔</div>
      <Link
        href='https://drive.google.com/file/d/1VBhXF9Pf7u-0Q_AwgKuxF0rtrW-k25KF/view?usp=sharing'
        target='_blank'
      >
        <Button variant='outline' className='flex w-fit gap-x-1'>
          <Book size={16} /> Resume
        </Button>
      </Link>
      <div className='py-1' />
      <div className='text-2xl md:text-[40px]'>Or contact me through 🔗</div>
      <div className='flex flex-wrap justify-center gap-3'>
        <Link href='mailto:bachtran@seas.upenn.edu' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <MdEmail /> bachtran@seas.upenn.edu
          </Button>
        </Link>
        <Link href='https://github.com/trangiabach' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <GrGithub size={16} /> Github
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/in/giabachtran/' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <Linkedin size={16} />
            LinkedIn
          </Button>
        </Link>
      </div>
    </div>
  );
};
