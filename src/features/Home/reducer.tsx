import { IActionType, IHomeState } from "../../typings";

export default function reducer(state: IHomeState, action: IActionType) {
  switch (action.type) {
    case 'FETCH_HOME':
      return { ...state, episodes: action.payload };
    case 'ADD_HOME':
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case 'REMOVE_HOME':
      return {
        ...state,
        favourites: action.payload
      };
    default:
      return state;
  }
}