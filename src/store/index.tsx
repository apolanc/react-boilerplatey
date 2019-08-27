import * as React from 'react';
import { IInitializeReducersProps } from '../typings';

export const Store = React.createContext({}); 

export function StoreProvider({ initialState = {}, reducers, children }: IInitializeReducersProps): any {
  const [state, dispatch] = React.useReducer(reducers, initialState);

  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}
