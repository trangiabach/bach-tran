'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';
import { useContainerDimensions } from '@/hooks/useContainerDimensions';
import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { projects } from './consts';
import { getProjectCardId } from './ProjectCard';
import { GoBook } from 'react-icons/go';

export const ProjectSearch = () => {
  const searchTrigger = useRef<HTMLButtonElement>(null);
  const { width: searchTriggerWidth } = useContainerDimensions(searchTrigger);

  const [open, setOpen] = useState<boolean>(false);

  const [hasSelectedOption, setHasSelectedOption] = useState<boolean>(false);

  const onProjectSelect = (title: ReactNode) => {
    setOpen(false);
    setHasSelectedOption(true);
    if (typeof title !== 'string') {
      return '';
    }

    const id = getProjectCardId(title);

    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 200,
      });
      section.focus({ preventScroll: true });
    }
  };

  const onPopoverButtonClick = () => {
    if (hasSelectedOption) {
      searchTrigger.current?.click();
      setHasSelectedOption(false);
    }
    setOpen(true);
  };

  return (
    <Popover onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='justify-between'
          ref={searchTrigger}
          onClick={onPopoverButtonClick}
        >
          Project Index 🔎
          <GoBook size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='z-20 w-full rounded-lg p-0'
        hidden={!open}
        forceMount={true}
        style={{ width: searchTriggerWidth }}
      >
        <Command className='rounded-lg border shadow-none'>
          <CommandInput placeholder='Search through projects...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Projects'>
              {projects.map((project, index) => (
                <CommandItem
                  className={cn(
                    'transiton-colors hover:cursor-pointer hover:bg-secondary'
                  )}
                  key={`${project.title}-${index}`}
                  style={{
                    pointerEvents: 'auto',
                    opacity: 100,
                  }}
                  onSelect={() => onProjectSelect(project.title)}
                >
                  <span className='opacity-1'>{project.title}</span>
                  <CommandShortcut className='hidden max-w-[50%] truncate text-right text-xs tracking-normal md:block'>
                    {project.subTitle}
                  </CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
