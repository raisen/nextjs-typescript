import { createContext } from 'react';

export const mainContextDefaultValues: MainContextData = {
  text: null,
};

export const MainContext = createContext<MainContextData>(mainContextDefaultValues);
