import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import modalReducer from "./features/modal/modalSlice";
import sortFilterBarReducer from "./features/sortFilterBar/sortFilterBarSlice";
import selectedMovieReducer from "./features/selectedMovie/selectedMovieSlice";


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        modal: modalReducer,
        sortFilterBar: sortFilterBarReducer,
        selectedMovie: selectedMovieReducer,
    },
});
