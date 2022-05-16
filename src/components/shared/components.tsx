import * as React from 'react';
import { Scene } from 'react-scrollmagic';
import {
  AlignFlexStart,
  SubHeaderContainer,
  SubHeaderText,
  SubHeaderDecoration,
  SectionHeaderText,
} from './styles';

interface SubHeaderProps {
  name: string;
  color?: string;
  fontWeight?: number;
  textDecoration?: string;
}

type SectionHeaderProps = SubHeaderProps;

export const SectionHeader = ({
  name,
  color,
  fontWeight,
  textDecoration,
}: SectionHeaderProps): React.ReactElement => {
  return (
    <AlignFlexStart>
      <Scene classToggle="show" triggerHook={0.8} reverse={false}>
        <SubHeaderContainer>
          <SectionHeaderText color={color} fontWeight={fontWeight}>
            {name}
          </SectionHeaderText>
          <SubHeaderDecoration color={color}>
            {textDecoration}
          </SubHeaderDecoration>
        </SubHeaderContainer>
      </Scene>
    </AlignFlexStart>
  );
};

export const SubHeader = ({
  name,
  color,
  fontWeight,
  textDecoration,
}: SubHeaderProps): React.ReactElement => {
  return (
    <AlignFlexStart>
      <Scene classToggle="show" triggerHook={0.8} reverse={false}>
        <SubHeaderContainer>
          <SubHeaderText color={color} fontWeight={fontWeight}>
            {name}
          </SubHeaderText>
          <SubHeaderDecoration color={color}>
            {textDecoration}
          </SubHeaderDecoration>
        </SubHeaderContainer>
      </Scene>
    </AlignFlexStart>
  );
};
