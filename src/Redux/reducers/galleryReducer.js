import {
  FETCH_GALLERY_COVER_REQUEST,
  FETCH_GALLERY_COVER_SUCCESS,
  FETCH_GALLERY_COVER_FAILURE,
  //
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: null,
  galleryCoverItems: [],
  galleryItems: [],
};

export const galleryCoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_COVER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GALLERY_COVER_SUCCESS:
      return {
        ...state,
        loading: false,
        galleryCoverItems: action.payload,
        error: null,
      };
    case FETCH_GALLERY_COVER_FAILURE:
      return {
        ...state,
        loading: false,
        galleryCoverItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const galleriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        galleryItems: action.payload,
        error: null,
      };
    case FETCH_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
        galleryItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
