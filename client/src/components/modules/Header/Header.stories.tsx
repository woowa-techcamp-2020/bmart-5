import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, Props } from './Header';
import { HeaderMainType } from '@utils/constants';

export default {
  title: 'Modules/Header',
  component: Header,
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.args = {
  main: { type: HeaderMainType.LOGO },
  right: [{ type: 'Search' }, { type: 'Bars' }],
};

export const BackAndTitle = Template.bind({});
BackAndTitle.args = {
  main: { type: HeaderMainType.TEXT, content: '장바구니' },
};

export const Category = Template.bind({});
Category.args = {
  main: { type: HeaderMainType.TEXT, content: '정육・수산・계란' },
  right: [{ type: 'Search' }, { type: 'Bars' }],
};

// TODO
export const SearchBar = Template.bind({});
SearchBar.args = {
  main: { type: HeaderMainType.SEARCH_BAR },
  right: [{ type: 'Search' }],
};

export const OrderList = Template.bind({});
OrderList.args = {
  main: { type: HeaderMainType.TEXT, content: '주문내역' },
  right: [{ type: 'Refresh' }],
};
