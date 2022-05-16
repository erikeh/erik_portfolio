import React, { ReactElement, RefObject } from 'react';
import ProjectList from './ProjectList';
import { SectionHeader } from '../shared/components';
import styled from 'styled-components';
import screen from '../../media/mediaQueries';

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const SubHeaderContentAlignmentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 60%;
  /* border-top: 0.5px solid rgb(51, 51, 51); */
  padding-top: 9vh;
  ${screen.extraLarge`
    width: 80%;
  `}
`;

interface ProjectsProps {
  projectsRef: RefObject<HTMLDivElement>;
}

function Projects({ projectsRef }: ProjectsProps): ReactElement {
  return (
    <ProjectsContainer ref={projectsRef}>
      <SubHeaderContentAlignmentContainer>
        <SectionHeader name={'PROJECTS'} fontWeight={200} />
        <ProjectList />
      </SubHeaderContentAlignmentContainer>
    </ProjectsContainer>
  );
}

export default Projects;
