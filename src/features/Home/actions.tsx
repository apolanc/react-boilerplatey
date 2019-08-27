const API_URL =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchHomeAction = (dispatch: any) => async () => {
  const data = await fetch(API_URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_HOME',
    payload: dataJSON._embedded.episodes
  });
};

export const toggleFavAction = (dispatch: any) => (episode: any, state: any) => {
  const episodeInFavourites = state.favourites.includes(episode);
  let dispatchObj = {
    type: 'ADD_HOME',
    payload: episode
  };
  if (episodeInFavourites)
    dispatchObj = {
      type: 'REMOVE_HOME',
      payload: state.favourites.filter((fav: any) => fav.id !== episode.id)
    };
  return dispatch(dispatchObj);
};