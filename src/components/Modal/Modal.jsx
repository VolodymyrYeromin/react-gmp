import "./modal.scss";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
import CongratulationsModal from "../CongratulationsModal/CongratulationsModal";
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../../redux/features/modal/modalSlice";
import constants from "../../constants";

const Modal = () => {
    const dispatch = useDispatch();
    const {openedModal} = useSelector(state => state.modal);
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
