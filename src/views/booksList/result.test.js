import React from "react";
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom";
import Result from './result';
import store from '../../redux/store'

afterEach(cleanup);

function renderWithRedux(component) {
    return {
        ...render(<Provider store={store}> { component }</Provider>)
    }
}

it("renders with redux", () => {
    const { getByTestId } = renderWithRedux(<Result />);
    expect(getByTestId('booksNb')).toBeInTheDocument()
})