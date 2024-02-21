import { Button } from '../ui/button';
import { Github, Book, Linkedin } from 'lucide-react';
import { LinkText } from '../common/LinkText';
import Link from 'next/link';
import { GrGithub } from 'react-icons/gr';

export const AboutText = () => {
  return (
    <div className='flex flex-col gap-y-3 text-sm md:text-[1rem] md:leading-snug'>
      <div>
        Hi! I am Bach Tran. I care deeply about developing software that brings
        joy to people. To that end, I have been honing my passion for full-stack
        engineering and building products that can benefit those around me. I am
        avid learner, loves to collaborate with others and always in for a
        challenge to deepen my understanding of the world!
      </div>
      <div>
        I have worked at{' '}
        <LinkText href='https://shop.getbezel.com/'>Bezel</LinkText> and{' '}
        <LinkText href='https://www.homebase.com.vn/'>Homebase</LinkText>, where
        I delved into UI infrastructure, API development, caching, testing, SEO
        and data tooling.
      </div>
      <div>
        At school, I help teach{' '}
        <LinkText href='https://catalog.upenn.edu/courses/cis/'>
          CIS3500: Software Design/Engineering
        </LinkText>{' '}
        and develop student-focused products to make{' '}
        <LinkText href='https://pennlabs.notion.site/OHQ-Instructor-Guide-76e70e0e0bb04637b1f5b7dad14ebfb4'>
          office hours easier with ohq.io
        </LinkText>
        ,{' '}
        <LinkText href='https://www.thedp.com/'>
          campus news more accessible with the DP
        </LinkText>{' '}
        and{' '}
        <LinkText href='https://penn-courses-llm.vercel.app/'>
          planning courses faster with Penn Courses LLM
        </LinkText>
        . I also built software for nonprofits to{' '}
        <LinkText href='https://docs.google.com/presentation/d/1dEXDQMdSs0JTfwcE7Io3dI1tu923v1oHC0QtvzQrEjg/edit?usp=sharing'>
          manage data more efficiently with Hack4Impact
        </LinkText>
        . On the side, I like to build projects that help me learn new
        technologies or enrich my knowledge with familiar ones.
      </div>
      <div>
        Outside of work, I love kickboxing 🥊, photography 📸, RPG games 👾 and
        cats 🐈.
      </div>
      <div className='pt-3' />
      <div className='flex flex-wrap gap-3'>
        <Link href='https://drive.google.com/file/d/1G40lWBMxALfVuirb4SKdGPI6RlABYNhp/view?usp=sharing' target='_blank'>
          <Button variant='outline' className='flex w-fit gap-x-1'>
            <Book size={16} /> Resume
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
