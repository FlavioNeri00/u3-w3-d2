import { FAVOURITE_ERROR_OFF, FAVOURITE_ERROR_ON, GET_JOBS } from "../actions";

const initialState = {
  content: [],
  // isLoading: true,
  hasError: false,
  errorMessage: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };

    case FAVOURITE_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case FAVOURITE_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};

export default jobsReducer;
