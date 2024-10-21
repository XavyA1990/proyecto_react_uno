import { Link } from "react-router-dom";
import {
  CallToAction,
  HeroContent,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
} from "../../styles";

import { title, subTitle, schedule } from "../../lib/labels.json";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subTitle}</HeroSubtitle>
        <CallToAction>
          <Link to="/contact">{schedule}</Link>
        </CallToAction>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
