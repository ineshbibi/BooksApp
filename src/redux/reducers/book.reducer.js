import * as booksActions from '../actions';

const initialState = {
    books: [],
    booksLength: 0,
    page: 0,
    itemsPerPage: 10,
    isLoading: false,
    query:''
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case booksActions.GET_BOOKS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
      }
    case booksActions.GET_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.payload.books,
        booksLength: action.payload.length,
        isLoading: false,
      };
      }
    case booksActions.GET_BOOKS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case booksActions.SET_BOOKS_PAGINATION: {
      return {
        ...state,
        page: action.page,
        itemsPerPage: action.itemsPerPage
      }
    }
    case booksActions.SET_BOOKS_QUERY: {
      return {
        ...state,
        query: action.query,
        page: action.page
      }
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
