const API_URL =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchDashboardAction = async (dispatch: any) => {
  const data = await fetch(API_URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DASHBOARD',
    payload: dataJSON._embedded.episodes
  });
};

export const toggleDashboardAction = (episode: any, state: any, dispatch: any) => {
  const episodeInFavourites = state.favourites.includes(episode);
  let dispatchObj = {
    type: 'ADD_DASHBOARD',
    payload: episode
  };
  if (episodeInFavourites)
    dispatchObj = {
      type: 'REMOVE_DASHBOARD',
      payload: state.favourites.filter((fav: any) => fav.id !== episode.id)
    };
  return dispatch(dispatchObj);
};