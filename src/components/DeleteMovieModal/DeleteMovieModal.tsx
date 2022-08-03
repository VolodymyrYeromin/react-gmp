import styles from "./deleteMovieModal.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovieFromAPI} from "../../redux/features/movies/moviesSlice";
import {FC} from "react";
import {modalSliceType} from "../../types";
import {AppDispatch} from "../../redux/store";

const DeleteMovieModal: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {id} : { id? : number } = useSelector<modalSliceType>(state => state.modal.chosenMovie);

    const deleteMovie = (e) => {
        e.preventDefault();
        dispatch(deleteMovieFromAPI(id));
    }

    return (
        <div className={styles.deleteMovieContent}>
            <h2>Delete movie</h2>
            <p>Are you sure you want to delete this movie?</p>
            <button onClick={deleteMovie}>Confirm</button>
        </div>
    );
};

export default DeleteMovieModal;
