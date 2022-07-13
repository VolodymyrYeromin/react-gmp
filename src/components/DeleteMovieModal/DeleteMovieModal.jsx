import "./deleteMovieModal.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovieFromAPI} from "../../redux/features/movies/moviesSlice";

const DeleteMovieModal = () => {
    const dispatch = useDispatch();
    const {id} = useSelector(state => state.modal.chosenMovie);

    const deleteMovie = (e) => {
        e.preventDefault();
        dispatch(deleteMovieFromAPI(id));
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
