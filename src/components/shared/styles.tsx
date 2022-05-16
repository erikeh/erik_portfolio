import styled from 'styled-components';
import screen from '../../media/mediaQueries';

interface TextProps {
  color: string;
  fontWeight: number;
}

// HTML elements
export const SectionHeader = styled.h2`
  display: flex;
  flex-flow: row nowrap;
  font-size: 60px;
  font-weight: 500;
  justify-content: flex-start;
`;

export const SectionHeaderText = styled.h2<TextProps>`
  font-size: clamp(2em, 3.5vw, 4em);
  font-weight: 600;
  display: flex;
  flex-flow: row nowrap;
  color: ${(props) => props.color};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
`;

export const SubHeaderText = styled.h3<TextProps>`
  font-size: clamp(1.5em, 3vw, 4em);
  font-weight: 600;
  display: flex;
  flex-flow: row nowrap;
  color: ${(props) => props.color};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AlignFlexStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  ${screen.medium`
    justify-content: center;
  `}
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  opacity: 0;
  transform: translateY(10px);
  -webkit-transition: 0.7s;
  -moz-transition: 0.7s;
  -o-transition: 0.7s;
  transition: 0.7s;
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

// extended
export const Text = styled(SubHeaderText)<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
`;

export const SubHeaderDecoration = styled.p`
  color: ${(props) => props.color};
  font-size: clamp(1.5em, 3vw, 4em);
  display: flex;
  position: relative;
  top: -1vw;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
`;
