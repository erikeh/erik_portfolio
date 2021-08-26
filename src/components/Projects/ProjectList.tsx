import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';
import projects, { Project } from './projectInfo';
import screen from '../../media/mediaQueries';
import { Scene, Controller } from 'react-scrollmagic';

interface Props {}

const ProjectListItemWrapper = styled.div`
  display: flex;
  opacity: 0;
  justify-content: flex-start;
  flex: 0 1 auto;
  margin-top: 50px;
  height: 500px;
  transition: 0.7s;
  transform: translateY(30px);
  ${screen.medium`
    margin-bottom: 130px;
  `}

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

function ProjectList({}: Props): ReactElement {
  return (
    <>
      {(projects as Project[]).map((project, idx) => (
        <Scene key={idx} classToggle="show" triggerHook={0.8} reverse={false}>
          <ProjectListItemWrapper>
            <ProjectListItem
              key={idx}
              subHeader={project.name}
              description={project.description}
              technologies={project.technologies}
              src={project.src}
              link={project.link || ''}
              demo={project.demo || null}
            />
          </ProjectListItemWrapper>
        </Scene>
      ))}
    </>
  );
}

export default ProjectList;
