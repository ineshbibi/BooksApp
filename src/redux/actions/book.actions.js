import * as booksServices from '../services/book.services';
export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';
export const SET_BOOKS_PAGINATION = 'SET_BOOKS_PAGINATION';
export const SET_BOOKS_QUERY = 'SET_BOOKS_QUERY';
export const getBooksActions = (page,itemsPerPage, query) => {
  function request() {
    return {type: GET_BOOKS_REQUEST};
  }
  function success(payload) {
    return {type: GET_BOOKS_SUCCESS, payload};
  }
  function failure(error) {
    return {type: GET_BOOKS_FAILURE, error};
  }
  return (dispatch) => {
    dispatch(request());
    booksServices.getBooksService(page, itemsPerPage, query).then(
        (data) => {
        dispatch(
          success({
              books: data.books,
              length: data.count
          }),
        );
      },
      (error) => {
        dispatch(failure(error));
      },
    );
  };
};
export const setBooksPagination = (page, itemsPerPage) => dispatch =>
  dispatch({
    type: SET_BOOKS_PAGINATION,
    page,
    itemsPerPage
  });
  export const setBooksQuery = (query) => dispatch =>
  dispatch({
    type: SET_BOOKS_QUERY,
    query,
    page: 0
  });
