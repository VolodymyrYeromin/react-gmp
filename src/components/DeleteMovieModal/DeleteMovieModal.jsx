import "./deleteMovieModal.scss";
import {useDispatch} from "react-redux";
import {toggleDeleteModal, toggleModal} from "../../redux/features/modal/modalSlice";

const DeleteMovieModal = () => {
    const dispatch = useDispatch();

    const deleteMovie = (e) => {
        e.preventDefault();

        dispatch(toggleDeleteModal());
        dispatch(toggleModal());
    }

    return (
        <div className="delete-movie-content">
            <h2>Delete movie</h2>
            <p>Are you sure you want to delete this movie?</p>
            <button onClick={deleteMovie}>Confirm</button>
        </div>
    );
};

export default DeleteMovieModal;
