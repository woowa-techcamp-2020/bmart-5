import React, { useState, ReactNode } from 'react';
import { ProductType } from '@components/templates/SlidableContainer';

type Props = {
  children: ReactNode;
};

type ContextType = {
  select: ProductType | undefined;
  setSelect: Function;
};

const defaultValue = {
  select: undefined,
  setSelect: () => {},
};

export const Context = React.createContext<ContextType>(defaultValue);

export const Provider: React.FC<Props> = ({ children }) => {
  const [select, setSelect] = useState<ProductType>();

  return (
    <Context.Provider value={{ select: select, setSelect: setSelect }}>{children}</Context.Provider>
  );
};
