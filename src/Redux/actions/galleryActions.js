import axios from "axios";

import {
  FETCH_GALLERY_COVER_REQUEST,
  FETCH_GALLERY_COVER_SUCCESS,
  FETCH_GALLERY_COVER_FAILURE,
  //
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchGalleryCoverList = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/galleryCover`)
      .then((response) => {
        // response.data is the users
        const galleryCoverItems = response.data;

        dispatch(success(galleryCoverItems));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => {
  return {
    type: FETCH_GALLERY_COVER_REQUEST,
  };
};

export const success = (galleryCoverItems) => {
  return {
    type: FETCH_GALLERY_COVER_SUCCESS,
    payload: galleryCoverItems,
  };
};

export const failure = (error) => {
  return {
    type: FETCH_GALLERY_COVER_FAILURE,
    payload: error,
  };
};

export const fetchGalleryList = (imgId) => {
  return (dispatch) => {
    dispatch(requestGallery());
    axios
      .get(`${API_URL}/galleries`)
      .then((res) => {
        // response.data is the users
        const galleries = res.data.filter((el) => el.coverId === `${imgId}`);
        // const galleries = response.data;

        dispatch(successGallery(galleries));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failureGallery(errormsg));
      });
  };
};

export const requestGallery = () => {
  return {
    type: FETCH_GALLERY_REQUEST,
  };
};

export const successGallery = (galleries) => {
  return {
    type: FETCH_GALLERY_SUCCESS,
    payload: galleries,
  };
};

export const failureGallery = (error) => {
  return {
    type: FETCH_GALLERY_FAILURE,
    payload: error,
  };
};
