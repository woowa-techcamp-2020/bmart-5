import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo, Props } from './Logo';
import logo from './images/logo.svg';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta;

const Template: Story<Props> = (args) => <Logo {...args} />;

export const BmartLogo = Template.bind({});
BmartLogo.args = {
  src: logo,
  alt: 'logo',
  size: 5,
};
