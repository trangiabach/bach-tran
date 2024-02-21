import { FadeIn } from '../common/animations/FadeIn';
import { AboutCard } from './AboutCard';
import { AboutContainer } from './AboutContainer';

export const AboutSection = () => {
  return (
    <FadeIn>
      <AboutContainer>
        <AboutCard />
      </AboutContainer>
    </FadeIn>
  );
};
