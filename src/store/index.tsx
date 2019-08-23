import { createContext, useReducer} from "react";

interface IActionType {
  type: string
  payload: unknown
}

interface IInitializeReducersProps {
  initialState: unknown
  reducerFn: (state: unknown, action: IActionType) => unknown
}

interface IInitializeReducersReturn {
  state: unknown
  dispatch: (action: IActionType) => void
}

interface IInitializeReducersProps {
  initialState: unknown
  reducerFn: (state: unknown, action: IActionType) => unknown
  children: React.ReactNode[]
}

interface IInitializeReducersReturn {
  state: unknown
  dispatch: (action: IActionType) => void
}

export const Store = createContext({}); 

export function StoreProvider(props: IInitializeReducersProps): unknown {
  const { initialState, reducerFn, children } = props; 
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}
