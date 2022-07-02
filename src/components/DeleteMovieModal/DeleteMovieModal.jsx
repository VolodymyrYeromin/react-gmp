import "./deleteMovieModal.scss";
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../../redux/features/modal/modalSlice";
import constants from "../../constants";

const DeleteMovieModal = () => {
    const dispatch = useDispatch();
    const movie = useSelector(state => state.modal.chosenMovie)

    const deleteMovie = (e) => {
        e.preventDefault();

        dispatch(setModal(constants.modals.CLOSE));
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
