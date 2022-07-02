import {createSlice} from "@reduxjs/toolkit";
import constants from "../../../constants";

const initialState = {
    isOpen: false,
    openedModal: '',
    chosenMovie: {},
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            if (action.payload === constants.modals.CLOSE) {
                state.isOpen = false;
                state.openedModal = '';
                state.chosenMovie = {}
            } else {
                state.isOpen = true;
                state.openedModal = action.payload;
            }
        },
        setChosenMovie: (state, action) => {
            state.chosenMovie = action.payload
        },
    }
})

export const {setModal, setChosenMovie} = modalSlice.actions;

export default modalSlice.reducer;
