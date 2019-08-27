export interface IDashboardState {
  favourites: []
}

export interface IHomeState {
  favourites: []
}

export interface IActionType {
  type: string
  payload: unknown
}
  
export interface IInitializeReducersProps {
  initialState?: any
  reducers: (state: any, action?: IActionType) => any
  children: JSX.Element
}
