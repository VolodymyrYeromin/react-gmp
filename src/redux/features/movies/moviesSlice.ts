import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import constants from "../../../constants";
import {setModal} from "../modal/modalSlice";
import {sortings} from "../../../helpers";
import {moviesResponseType, movieType} from "../../../types";

const initialState = {
    totalAmount: 0,
    data: [],
    offset: 0,
    limit: 10,
}

export const getMovies = createAsyncThunk<moviesResponseType, {sorting?: string, searchQuery?: string, filtering?: string}>('movies/getMovies', async (data = {}) => {
    let url = `${constants.BASE_URL}?sortBy=${data.sorting ? data.sorting : sortings().RELEASE_DATE}&sortOrder=desc&search=${data.searchQuery ? data.searchQuery : ''}&searchBy=title&filter=${data.filtering ? data.filtering : ''}`;

    try {
        const response = await axios(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const createMovie = createAsyncThunk<void, movieType>('movies/createMovie', async (data, thunkAPI) => {
    const url = constants.BASE_URL;
    try {
        const response = await axios.post(url, data);
        if (response.status === 201) {
            thunkAPI.dispatch(setModal(constants.modals.CONGRATULATIONS));
            thunkAPI.dispatch(getMovies({}));
        }
    } catch (error) {
        console.log(error);
    }
});

export const updateMovie = createAsyncThunk<void, movieType>('movies/updateMovie', async (data, thunkAPI) => {
    const url = constants.BASE_URL;
    try {
        const response = await axios.put(url, data);
        if (response.status === 200) {
            thunkAPI.dispatch(setModal(constants.modals.CLOSE));
            thunkAPI.dispatch(getMovies({}));
        }
    } catch (error) {
        console.log(error);
    }
});

export const deleteMovieFromAPI = createAsyncThunk<void, number>('movies/deleteMovie', async (data, thunkAPI) => {
    const url = `${constants.BASE_URL}/${data}`;
    try {
        const response = await axios.delete(url, {data});
        if (response.status === 204) {
            thunkAPI.dispatch(setModal(constants.modals.CLOSE));
            thunkAPI.dispatch(getMovies({}));
        }
    } catch (error) {
        console.log(error);
    }
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getMovies.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.totalAmount = action.payload.totalAmount;
            },
        )
    }
});

export default moviesSlice.reducer;
