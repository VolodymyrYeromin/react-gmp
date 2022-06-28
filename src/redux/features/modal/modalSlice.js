import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isAddModalShown: false,
    isEditModalShown: false,
    isCongratulationsModalShown: false,
    isDeleteModalShown: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isOpen = !state.isOpen;
        },
        toggleAddModal: (state) => {
            state.isAddModalShown = !state.isAddModalShown;
        },
        toggleEditModal: (state) => {
            state.isEditModalShown = !state.isEditModalShown;
        },
        toggleCongratulationsModal: (state) => {
            state.isCongratulationsModalShown = !state.isCongratulationsModalShown;
        },
        toggleDeleteModal: (state) => {
            state.isDeleteModalShown = !state.isDeleteModalShown;
        },
    }
})

export const {toggleModal, toggleAddModal, toggleEditModal, toggleCongratulationsModal, toggleDeleteModal} = modalSlice.actions;

export default modalSlice.reducer;
