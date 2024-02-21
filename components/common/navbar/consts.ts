import { SwitcherOptionProps } from './SwitcherOption';

export const homeOption: SwitcherOptionProps = {
  title: '🏡 Home',
  href: '#home',
};

export const aboutSection: SwitcherOptionProps = {
  title: '👋 About',
  href: '#about',
};

export const projectSection: SwitcherOptionProps = {
  title: '💻 Projects',
  href: '#projects',
};

export const resumeSection: SwitcherOptionProps = {
    title: '📔 Resume',
    href: '#resume',
}

export const switcherOptions: SwitcherOptionProps[] = [
  homeOption,
  aboutSection,
  projectSection,
  resumeSection
];
