import React, { ReactElement } from 'react';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';
import projects, { Project } from './projectInfo';
import screen from '../../media/mediaQueries';
import { Scene } from 'react-scrollmagic';

const ProjectListItemWrapper = styled.div`
  display: flex;
  opacity: 0;
  justify-content: flex-start;
  flex: 0 1 auto;
  margin-top: 50px;
  transform: translateY(25px);
  -webkit-transition: 0.7s;
  -moz-transition: 0.7s;
  -o-transition: 0.7s;
  transition: 0.7s;
  margin-bottom: 2.5rem;
  /* ${screen.medium`
    margin-bottom: 130px;
  `} */
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

function ProjectList(): ReactElement {
  return (
    <>
      {(projects as Project[]).map((project, idx) => (
        <Scene key={idx} classToggle="show" triggerHook={0.8} reverse={false}>
          <ProjectListItemWrapper>
            <ProjectListItem
              key={idx}
              name={project.name}
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
