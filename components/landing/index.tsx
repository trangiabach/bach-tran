import { LandingContainer } from './LandingContainer';
import { LandingGraphic } from './LandingGraphic';
import { LandingTitle } from './LandingTitle';

export const LandingSection = () => {
  return (
    <LandingContainer>
      <LandingTitle />
      <LandingGraphic />
    </LandingContainer>
  );
};
