import * as React from 'react';
import styled from '../../styles/styled-components';
import H1 from '../Typography/H1';

type CardProps = {
  borderTopColor: string;
};

const Card = styled.div<CardProps>`
  border-top: ${({ borderTopColor }): string => `4px solid ${borderTopColor}`};
  border-radius: 4px;
  box-shadow: 4px 8px 12px 8px hsla(234, 12%, 34%, 0.12);
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin: 16px;
  min-width: 320px;
`;

const Icon = styled.img`
  width: 52px;
  height: 52px;
  margin-top: 32px;
  align-self: flex-end;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  margin-top: 4px;
  color: ${({ theme }): string => theme.colors.grayishBlue};
`;

type FeatureProps = {
  title: string;
  description: string;
  icon: string;
  borderTopColor: string;
};

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  borderTopColor,
}) => (
  <Card borderTopColor={borderTopColor}>
    <H1>{title}</H1>
    <Description>{description}</Description>
    <Icon src={icon} alt={title}/>
  </Card>
);

export default Feature;
