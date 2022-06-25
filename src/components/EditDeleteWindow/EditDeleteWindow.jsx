import './editDeleteWindow.scss'
import {useState} from "react";
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
import PropTypes from "prop-types";

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

// EditDeleteWindow.propTypes = {
//     movie: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string.isRequired),
//         url: PropTypes.string.isRequired,
//         rating: PropTypes.string.isRequired,
//         runtime: PropTypes.string.isRequired,
//         overview: PropTypes.string.isRequired
//     }),
//     index: PropTypes.number.isRequired,
//     moviesState: PropTypes.arrayOf(PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string.isRequired),
//         url: PropTypes.string.isRequired,
//         rating: PropTypes.string.isRequired,
//         runtime: PropTypes.string.isRequired,
//         overview: PropTypes.string.isRequired
//     })),
//     setMoviesState: PropTypes.func.isRequired,
//     showWindow: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
// };

export default EditDeleteWindow;
