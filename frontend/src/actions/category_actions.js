import { fetchCategories } from '../api';

export const GET_CATEGORIES = "GET_CATEGORIES";

export const receiveCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
};

export const getCategories = () => (dispatch) => {
  fetchCategories()
    .then((data) => {
      return dispatch(receiveCategories(data.categories));
    });
};