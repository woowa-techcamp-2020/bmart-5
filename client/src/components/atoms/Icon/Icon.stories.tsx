import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon, Props } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<Props> = (args) => <Icon {...args} />;

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  icon: 'ArrowLeft',
  size: 1,
};

export const Search = Template.bind({});
Search.args = {
  icon: 'Search',
  size: 1,
};

export const Bars = Template.bind({});
Bars.args = {
  icon: 'Bars',
  size: 1,
};

export const RegHeart = Template.bind({});
RegHeart.args = {
  icon: 'RegHeart',
  size: 1,
};

export const Heart = Template.bind({});
Heart.args = {
  icon: 'Heart',
  size: 1,
};

export const Refresh = Template.bind({});
Refresh.args = {
  icon: 'Refresh',
  size: 1,
};

export const Close = Template.bind({});
Close.args = {
  icon: 'Close',
  size: 1,
};

export const Notification = Template.bind({});
Notification.args = {
  icon: 'Notification',
  size: 1,
};
