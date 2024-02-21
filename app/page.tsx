import { AboutSection } from '@/components/about';
import { LandingSection } from '@/components/landing';
import { ProjectsSection } from '@/components/projects';
import { ResumeSection } from '@/components/resume';

export default function Home() {
  return (
    <div className='min-h-screen w-full'>
      <LandingSection />
      <div className='h-[150px]' />
      <AboutSection />
      <div className='h-[150px]' />
      <ProjectsSection />
      <div className='h-[150px]' />
      <ResumeSection />
      <div className='h-[150px]' />
    </div>
  );
}
