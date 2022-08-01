import AddMovieModal from "../AddMovieModal/AddMovieModal";
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
import CongratulationsModal from "../CongratulationsModal/CongratulationsModal";
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../../redux/features/modal/modalSlice";
import constants from "../../constants";
import {FC} from "react";
import {modalSliceType} from "../../types";

const Modal:FC = () => {
    const dispatch = useDispatch();
    const { openedModal } : { openedModal? : string } = useSelector<modalSliceType>(state => state.modal);
    const closeModal = () => dispatch(setModal(constants.modals.CLOSE));

    return (
        <div className="overlay">
            <div className="modal-window">
                <div className="modal-top">
                    <button onClick={closeModal} className="close-button">&#10005;</button>
                </div>
                {openedModal === constants.modals.ADD && <AddMovieModal />}
                {openedModal === constants.modals.EDIT && <EditMovieModal />}
                {openedModal === constants.modals.DELETE && <DeleteMovieModal />}
                {openedModal === constants.modals.CONGRATULATIONS && <CongratulationsModal />}
            </div>
        </div>
    );
};

export default Modal;
