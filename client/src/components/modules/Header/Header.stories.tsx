import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, Props } from './Header';

export default {
  title: 'Modules/Header',
  component: Header,
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.args = {
  left: 'ArrowLeft',
  main: { type: 'Logo' },
  right: ['Search', 'Bars'],
};

export const Back = Template.bind({});
Back.args = {
  left: 'ArrowLeft',
};

export const BackAndTitle = Template.bind({});
BackAndTitle.args = {
  left: 'ArrowLeft',
  main: { type: 'Text', content: '장바구니' },
};

export const Category = Template.bind({});
Category.args = {
  left: 'ArrowLeft',
  main: { type: 'Text', content: '정육・수산・계란' },
  right: ['Search', 'Bars'],
};

// TODO
export const SearchBar = Template.bind({});
SearchBar.args = {
  left: 'ArrowLeft',
  main: { type: 'SearchBar' },
  right: ['Search'],
};

export const OrderList = Template.bind({});
OrderList.args = {
  left: 'Notification',
  main: { type: 'Text', content: '주문내역' },
  right: ['Refresh'],
};
