import * as React from 'react';

interface IActionType {
  type: string
  payload: unknown
}

interface IInitializeReducersProps {
  initialState?: any
  reducerFn: (state: any, action?: IActionType) => any
  children: JSX.Element
}

export const Store = React.createContext({}); 

export function StoreProvider(props: IInitializeReducersProps): any {
  const { initialState, reducerFn, children } = props; 
  const [state, dispatch] = React.useReducer(reducerFn, initialState);

  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}
