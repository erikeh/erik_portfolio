import * as React from 'react';

import styled from 'styled-components';

// HTML elements
export const SectionHeader = styled.h2`
  display: flex;
  flex-flow: row nowrap;
  font-size: 60px;
  font-weight: 500;
  justify-content: flex-start;
`;

export const SubHeaderText = styled.h3`
  font-size: 4em;
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AlignFlexStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

// extended
export const Text = styled(SubHeaderText)`
  color: #001219;
`;

export const SubHeaderDecoration = styled(SubHeaderText)`
  color: #001219;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
  /* padding-right: 66%; */
  height: 40px;
`;