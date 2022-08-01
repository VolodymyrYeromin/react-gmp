import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import modalReducer from "./features/modal/modalSlice";
import selectedMovieReducer from "./features/selectedMovie/selectedMovieSlice";


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        modal: modalReducer,
        selectedMovie: selectedMovieReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
