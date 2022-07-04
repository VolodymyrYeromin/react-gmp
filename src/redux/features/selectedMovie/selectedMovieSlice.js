import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movie: {},
    isSelectedMovieShown: false
};

const selectedMovieSlice = createSlice({
    name: 'selectedMovie',
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.movie = action.payload;
            state.isSelectedMovieShown = true;
        },
        removeSelectedMovie: (state) => {
            state.movie = {};
            state.isSelectedMovieShown = false;
        }
    }
})

export const {setSelectedMovie, removeSelectedMovie} = selectedMovieSlice.actions;

export default selectedMovieSlice.reducer;
