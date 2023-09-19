export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const FAVOURITES_LOADING = "FAVOURITES_LOADING";
export const FAVOURITES_OFF_LOADING = "FAVOURITES_OFF_LOADING";
export const FAVOURITE_ERROR_ON = "FAVOURITE_ERROR_ON";
export const FAVOURITE_ERROR_OFF = "FAVOURITE_ERROR_OFF";

export const addToFavoritesAction = (companyName) => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
});

export const removeFromFavoritesAction = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        //   setJobs(data);
        dispatch({ type: GET_JOBS, payload: data });
        console.log("DATA", data);
      } else {
        throw new Error("errore reperimento dati");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: FAVOURITE_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: FAVOURITES_OFF_LOADING });
    }
  };
};
