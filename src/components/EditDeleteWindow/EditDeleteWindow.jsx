import './editDeleteWindow.scss'
import {useDispatch} from "react-redux";
import {setChosenMovie, setModal} from "../../redux/features/modal/modalSlice";
import PropTypes from "prop-types";
import constants from "../../constants";

const EditDeleteWindow = ({showWindow, onClose, movie}) => {
    if (!showWindow) {
        return null;
    }
    const dispatch = useDispatch();

    const openModal = (e, modalName) => {
        e.stopPropagation();
        dispatch(setChosenMovie(movie));
        dispatch(setModal(modalName));
        onClose();
    }

    return (
        <div className="edit-delete-window">
            <div className="window-header">
                <button onClick={onClose} className="close-button">&#10005;</button>
            </div>
            <ul className="window-options">
                <li onClick={(e) => openModal(e, constants.modals.EDIT)}>Edit
                </li>
                <li onClick={(e) => openModal(e, constants.modals.DELETE)}>Delete
                </li>
            </ul>
        </div>
    );
};

EditDeleteWindow.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string,
        vote_average: PropTypes.number.isRequired,
        vote_count: PropTypes.number,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        budget: PropTypes.number,
        revenue: PropTypes.number,
        runtime: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    showWindow: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditDeleteWindow;
