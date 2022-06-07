import './editDeleteWindow.scss'
import {useState} from "react";
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";

const EditDeleteWindow = ({showWindow, onClose, movie, index, moviesState, setMoviesState}) => {
    if (!showWindow) {
        return null;
    }

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div className="edit-delete-window">
            <div className="window-header">
                <button onClick={onClose} className="close-button">&#10005;</button>
            </div>
            <ul className="window-options">
                <li onClick={() => {
                    setShowEditModal(true);
                }}>Edit
                </li>
                <li onClick={() => {
                    setShowDeleteModal(true);
                }}>Delete
                </li>
            </ul>
            <EditMovieModal index={index} movie={movie} moviesState={moviesState} setMoviesState={setMoviesState}
                            showEditModal={showEditModal} closeEditWindow={onClose}
                            onClose={() => setShowEditModal(false)}/>
            <DeleteMovieModal index={index} moviesState={moviesState} setMoviesState={setMoviesState}
                              showDeleteModal={showDeleteModal} closeDeleteWindow={onClose} onClose={() => setShowDeleteModal(false)}/>
        </div>
    );
};

export default EditDeleteWindow;