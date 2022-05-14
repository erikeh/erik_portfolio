import React, { ReactElement, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SubHeader } from '../shared/components';
import screen from '../../media/mediaQueries';
import { useMediaQuery } from 'react-responsive';
import ScrollMagic from 'scrollmagic';

interface Props {
  text: string;
  src: string;
  description: string;
  technologies: string[];
  link: string;
  demo?: string;
}

interface StyledProps {
  isHovering: boolean;
}

const ProjectListItemContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  ${screen.medium`
    flex-flow: column nowrap;
    align-items: center;
  `}
`;

const OrderedSubHeader = styled(SubHeader)`
  order: 0;
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex: 0 1 55%;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${screen.medium`
    order: 2;
  `}
`;

const ProjectDescription = styled.p<StyledProps>`
  font-family: 'IBM Plex Mono', monospace;
  height: fit-content;
  font-size: 0.9em;
  background-color: #005f73;
  line-height: 20px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 2px 5px 25px -15px black;
  ${(props) =>
    props.isHovering
      ? 'margin-left: -26%; margin-right: 1%;'
      : 'margin-right: -25%;'}
  z-index: 2;
  -webkit-transition: margin 0.3s ease-out;
  -moz-transition: margin 0.3s ease-out;
  -o-transition: margin 0.3s ease-out;
  transition: margin 0.3s ease-out;
  ${screen.medium<StyledProps>`
    margin 0;
    order: 2;
    ${(props) => props.isHovering && 'margin 0;'}
        // ? 'margin-bottom: 0%; margin-right: 0%;'
        // : 'margin-bottom: -25%;'}
  `}
`;

const Technologies = styled.ul`
  display: flex;
  flex-flow: column wrap;
  font-family: 'IBM Plex Mono', monospace;
  height: 50px;
  ${screen.medium`
    order: 3;
    margin 2% 0;
  `}
`;

const ProjectPreviewWrapper = styled.a<StyledProps>`
  flex: 0 1 60%;
  max-width: 500px;
  min-width: 30%;
  ${({ isHovering }) => !isHovering && 'filter: grayscale(100%) invert(75%);'}
  -webkit-transition: margin 0.3s ease-out;
  -moz-transition: margin 0.3s ease-out;
  -o-transition: margin 0.3s ease-out;
  transition: 0.5s;
  ${screen.medium`
    order: 3;
  `}
`;

const ProjectPreview = styled.video`
  width: 100%;
  min-width: 30vw;
`;

const DemoLink = styled.a`
  display: inline-block;
  color: #000dc9;
  &:hover {
    color: #259ac8;
    transform: scaleX(1);
  }
`;

function ProjectListItem({
  text,
  description,
  technologies,
  src,
  link,
  demo,
}: Props): ReactElement {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollMagicScene, setScrollMagicScene] =
    useState<ScrollMagic.Scene | null>(null);

  const isMobile = useMediaQuery({ query: `(max-width: 680px)` });
  const videoRef = useRef<HTMLVideoElement>();
  const controller = new ScrollMagic.Controller();

  const playVideo = () => {
    videoRef.current?.play();
    setIsHovering(true);
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    setIsHovering(false);
  };

  const enterCallback = () => {
    if (isMobile) {
      playVideo();
    }
  };

  const leaveCallback = () => {
    if (isMobile) {
      pauseVideo();
    }
  };

  useEffect(() => {
    if (!scrollMagicScene) return;

    if (isMobile) {
      scrollMagicScene.addTo(controller);
    } else {
      scrollMagicScene.remove();
    }
  }, [isMobile, scrollMagicScene]);

  useEffect(() => {
    const scene = new ScrollMagic.Scene({
      triggerElement: videoRef.current,
      duration: 500,
    })
      .on('enter', playVideo)
      .on('leave', pauseVideo);
    setScrollMagicScene(scene);
  }, []);

  return (
    <ProjectListItemContainer>
      <ProjectDetailsContainer>
        <OrderedSubHeader text={text} fontWeight={600} />
        <ProjectDescription isHovering={isHovering}>
          {description}
          {demo && (
            <>
              <br />
              <DemoLink
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo Link"
              >
                Try the demo
              </DemoLink>
            </>
          )}
        </ProjectDescription>
        <Technologies>
          {technologies.map((technology, idx) => (
            <li key={idx}>&#8226;{technology}</li>
          ))}
        </Technologies>
      </ProjectDetailsContainer>

      <ProjectPreviewWrapper
        isHovering={isHovering}
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Page to project"
      >
        <ProjectPreview ref={videoRef} loop muted playsInline preload={'auto'}>
          <source src={src} type="video/mp4" />
        </ProjectPreview>
      </ProjectPreviewWrapper>
    </ProjectListItemContainer>
  );
}

export default ProjectListItem;
