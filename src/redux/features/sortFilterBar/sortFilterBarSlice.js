import {createSlice} from "@reduxjs/toolkit";
import constants from "../../../constants";


const initialState = {
    filtering: constants.genres.ALL,
    sorting: constants.sorting.RELEASE_DATE
}

const sortFilterBarSlice = createSlice({
    name: 'sortFilterBar',
    initialState,
    reducers: {
        setFilterValue: (state, action) => {
            state.filtering = action.payload;
        },
        setSortingValue: (state, action) => {
            state.sorting = action.payload;
        },
    },
});

export const {setFilterValue, setSortingValue} = sortFilterBarSlice.actions;

export default sortFilterBarSlice.reducer;
