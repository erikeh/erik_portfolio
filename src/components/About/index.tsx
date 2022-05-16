import React, { ReactElement } from 'react';
import { SubHeader, SectionHeader } from '../shared/components';
import { Scene } from 'react-scrollmagic';
import profilePic from '../../assets/img/profile_300x400.jpg';
import logos from './logos';
import * as s from './styles';

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

function About({ aboutRef }: AboutProps): ReactElement {
  const logoList = Object.entries(logos).map((logoPair, idx) => {
    const { src, alt, link } = logoPair[1];
    return (
      <s.LogoImage
        key={idx}
        img={src}
        alt={alt}
        link={link}
        whileHover={{ scale: 1.1 }}
      />
    );
  });

  return (
    <div ref={aboutRef}>
      <Scene classToggle="show" triggerHook={0.6} reverse={false}>
        <s.AboutContainer>
          <s.SubHeaderAlignmentWrapper>
            <SectionHeader name={'ABOUT'} fontWeight={200} />
          </s.SubHeaderAlignmentWrapper>
          <s.ProfileAndBio>
            <s.ProfilePictureWrapper>
              <s.ProfilePicture
                src={profilePic}
                alt="Erik with dog in lap"
                width="300"
                height="400"
              />
            </s.ProfilePictureWrapper>
            <s.DetailsContainer>
              <SubHeader
                name={`Who's Erik?`}
                color={'#e7ecef'}
                fontWeight={200}
                textDecoration={'------------'}
              />
              <s.Bio>
                {`I'm a full-stack developer living in Los Angeles, CA. I'm unapologetically passionate about JavaScript in the modern web, but also like to ponder about well-designed APIs.`}
              </s.Bio>
              <s.Bio>{`I have a big propensity towards learning. Meaning in my free time I read about best practices, new design patterns, the latest update of React's concurrency mode - not because I have to - but because I genuinely enjoy doing so. `}</s.Bio>
              <s.Bio>
                {`In my free time, I take my dog to the park, go surfing early in the morning, or create alien soundscapes with my modular synth!`}
              </s.Bio>
            </s.DetailsContainer>
          </s.ProfileAndBio>
          <SubHeader
            name={`Core Technologies`}
            color={'#e7ecef'}
            fontWeight={200}
          />
          <s.Logos>{logoList}</s.Logos>
        </s.AboutContainer>
      </Scene>
    </div>
  );
}

export default About;
