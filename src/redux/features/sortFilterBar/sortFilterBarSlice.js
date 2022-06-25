import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    filtering: 'all',
    sorting: 'release_date'
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
