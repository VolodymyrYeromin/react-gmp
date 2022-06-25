import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    totalAmount: 0,
    data: [],
    offset: 0,
    limit: 10,
}

export const getMovies = createAsyncThunk('movies/getMovies', async (_, thunkAPI) => {
    const sortFilterValues = thunkAPI.getState().sortFilterBar;
    let url;
    if (sortFilterValues.filtering.toLowerCase() === 'all') {
        url = `http://localhost:4000/movies?sortBy=${sortFilterValues.sorting}&sortOrder=desc`;
    } else {
        url = `http://localhost:4000/movies?sortBy=${sortFilterValues.sorting}&sortOrder=desc&filter=${sortFilterValues.filtering}`;
    }
    try {
        const response = await axios(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [getMovies.fulfilled]:(state, action) => {
            state.data = action.payload.data;
            state.totalAmount = action.payload.totalAmount;
        },
    }
});

export default moviesSlice.reducer;
