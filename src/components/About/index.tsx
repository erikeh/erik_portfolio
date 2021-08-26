import React, { ReactElement } from 'react';
import { SubHeader } from '../shared/components';
import profilePic from '../../assets/img/profile_300x400.jpg';
import logos from './logos';
import * as s from './styles';
import { css } from 'styled-components';

interface AboutProps {}

function About({}: AboutProps): ReactElement {
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
    <s.AboutContainer>
      <s.SubHeaderAlignmentWrapper>
        <SubHeader subHeader={'<About />'} color={'#423d88'} fontWeight={200} />
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
            subHeader={`Who's Erik?`}
            color={'#e7ecef'}
            fontWeight={600}
            textDecoration={'-'}
          />
          <s.Bio>
            {`I'm a full-stack developer living in Los Angeles, LA. I'm passionate
            about great UX. But I'm equally passionate about writing organized,
            modularized and thoughtful code.`}
          </s.Bio>
          <SubHeader
            subHeader={`Technologies`}
            color={'#e7ecef'}
            fontWeight={600}
            textDecoration={'-'}
          />
          <s.Logos>{logoList}</s.Logos>
        </s.DetailsContainer>
      </s.ProfileAndBio>
    </s.AboutContainer>
  );
}

export default About;
