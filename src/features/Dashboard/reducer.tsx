export default function reducer(state: any, action: any) {
  switch (action.type) {
    case 'FETCH_DASHBOARD':
      return { ...state, episodes: action.payload };
    case 'ADD_DASHBOARD':
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case 'REMOVE_DASHBOARD':
      return {
        ...state,
        favourites: action.payload
      };
    default:
      return state;
  }
}