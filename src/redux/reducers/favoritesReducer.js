import { ADD_TO_FAVOURITE, FAVOURITES_LOADING, FAVOURITES_OFF_LOADING, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  list: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };

    case FAVOURITES_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FAVOURITES_OFF_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
