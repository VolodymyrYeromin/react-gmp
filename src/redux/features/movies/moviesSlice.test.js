import {store} from "../../store";
import {createMovie, deleteMovieFromAPI, getMovies, updateMovie} from "./moviesSlice";

describe('Test movies slice', () => {
    const spyOnDispatch = jest.spyOn(store, "dispatch");

    it('setting initial state as object without movies', () => {
        const initialState  = {
            totalAmount: 0,
            data: [],
            offset: 0,
            limit: 10,
        }
        const state = store.getState().movies;

        expect(state).toEqual(initialState);
    })

    it('fetching movies', async () => {
        const result = await store.dispatch(getMovies());
        const state = store.getState().movies;

        expect(result.type).toBe('movies/getMovies/fulfilled')
        expect(result.payload.data.length).toBe(10)
        expect(state).toEqual(result.payload);
    })

    it('creating movie and updating list with movies', async () => {
        const mockMovie = {
            genres: ["Horror", "Documentary"],
            overview: "Test description",
            poster_path: "https://test.url",
            release_date: "2022-07-04",
            runtime: 123,
            title: "Test movie",
            vote_average: 9
        }
        const response = await store.dispatch(createMovie(mockMovie));

        expect(response.type).toBe('movies/createMovie/fulfilled');
        expect(spyOnDispatch).toHaveBeenCalled();
    })

    it('creating movie with error', async () => {
        const mockMovie = {}
        const spyOnConsole = jest.spyOn(console, "log")
        await store.dispatch(createMovie(mockMovie));

        expect(spyOnConsole).toHaveBeenCalled();
    })

    it('updating movie and updating list with movies', async () => {
        const mockMovie = {
            genres: ["Horror", "Documentary"],
            overview: "Test description",
            poster_path: "https://test.url",
            release_date: "2022-07-04",
            runtime: 123,
            title: "Test movie",
            vote_average: 9,
            id: 447365
        }
        const response = await store.dispatch(updateMovie(mockMovie));

        expect(response.type).toBe('movies/updateMovie/fulfilled');
        expect(spyOnDispatch).toHaveBeenCalled();
    })

    it('deleting movie and updating list with movies', async () => {
        const mockId = 447365;
        const response = await store.dispatch(deleteMovieFromAPI(mockId));

        expect(response.type).toBe('movies/deleteMovie/fulfilled');
        expect(spyOnDispatch).toHaveBeenCalled();
    })
})
