import "./modal.scss";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
import CongratulationsModal from "../CongratulationsModal/CongratulationsModal";
import {useDispatch, useSelector} from "react-redux";
import {
    toggleAddModal,
    toggleCongratulationsModal, toggleDeleteModal,
    toggleEditModal,
    toggleModal
} from "../../redux/features/modal/modalSlice";

const Modal = () => {
    const dispatch = useDispatch();
    const {isAddModalShown, isEditModalShown, isCongratulationsModalShown, isDeleteModalShown} = useSelector(state => state.modal)

    return (
        <div className="overlay">
            <div className="modal-window">
                <div className="modal-top">
                    <button onClick={() => {
                        if(isAddModalShown) {
                            dispatch(toggleAddModal());
                        }
                        if(isEditModalShown) {
                            dispatch(toggleEditModal());
                        }
                        if(isCongratulationsModalShown) {
                            dispatch(toggleCongratulationsModal());
                        }
                        if(isDeleteModalShown) {
                            dispatch(toggleDeleteModal());
                        }
                        dispatch(toggleModal());
                    }} className="close-button">&#10005;</button>
                </div>
                {isAddModalShown && <AddMovieModal />}
                {isEditModalShown && <EditMovieModal />}
                {isDeleteModalShown && <DeleteMovieModal />}
                {isCongratulationsModalShown && <CongratulationsModal />}
            </div>
        </div>
    );
};

export default Modal;
