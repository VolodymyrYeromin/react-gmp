import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import constants from "../../../constants";
import axios from "axios";

const initialState = {
    movie: {},
    isSelectedMovieShown: false
};

export const getSelectedMovie = createAsyncThunk('selectedMovie/getSelectedMovie', async (id) => {
    let url = `${constants.BASE_URL}/${id}`;

    try {
        const response = await axios(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const selectedMovieSlice = createSlice({
    name: 'selectedMovie',
    initialState,
    reducers: {},
    extraReducers: {
        [getSelectedMovie.fulfilled]:(state, action) => {
            state.movie = action.payload;
            state.isSelectedMovieShown = true;
        },
    }
})

export default selectedMovieSlice.reducer;
