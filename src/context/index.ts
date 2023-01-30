import React, { createContext } from 'react';
import { discussions } from '../db/discussions';
import { IDiscussion, InitialState } from '../types/types';

interface Types {
  state: InitialState;
  setState: (e: InitialState) => void;
}

export const globalContext = createContext<Types>({
  state: {
    comments: discussions,
    replyId: 1
  },
  setState: () => {}
});

export const useGlobalContext = () => React.useContext(globalContext);
