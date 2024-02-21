'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { projects } from './consts';
import { ProjectCard } from './ProjectCard';

export const ProjectsCard = () => {
  return (
    <Card>
      <CardHeader className='text-center'>
        <CardTitle className='text-3xl'>💻 Projects</CardTitle>
        <CardDescription>Some of the things I have built!</CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-4 p-2 md:p-6'>
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </CardContent>
    </Card>
  );
};
