import React from "react";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react'
import "jest-dom/extend-expect";
import Result from './result';

afterEach(cleanup);

const initialState = { booksLength: 0 }
function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BOOKS_SUCCESS":
            return {
                ...state,
                booksLength: 2425
            };
        default:
            return state;
    }
}
function renderWithRedux(component, { startState, store = createStore(reducer, startState) } = {}) {
    return {
        ...render(<Provider store={store}> { component }</Provider>)
    }
}

it("renders with redux", () => {
    const { getByTestId } = renderWithRedux(<Result />);
    expect(getByTestId('booksNb')).toHaveTextContent("2425")
})