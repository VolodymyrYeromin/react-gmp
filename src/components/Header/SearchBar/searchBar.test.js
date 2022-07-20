import SearchBar from "./SearchBar";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../../redux/store";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("Test search bar", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchBar/>
                </MemoryRouter>
            </Provider>
        )
    })

    test('search bar matching screenshot', () => {
        const searchBlock = screen.getByTestId('search-block');

        expect(searchBlock).toMatchSnapshot();
    });

    test('search bar input event and search request', async () => {
        const searchInput = screen.getByTestId('search-input');
        const searchButton = screen.getByTestId('search-button');

        await act(() => fireEvent.change(searchInput, {target: {value: 'avengers'}}));
        expect(searchInput.value).toBe('avengers');

        userEvent.click(searchButton)
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledTimes(1);
        });
    })
})
