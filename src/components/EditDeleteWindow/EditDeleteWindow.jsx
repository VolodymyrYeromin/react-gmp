import styles from './editDeleteWindow.module.scss'
import {useDispatch} from "react-redux";
import {setChosenMovie, setModal} from "../../redux/features/modal/modalSlice";
import PropTypes from "prop-types";
import constants from "../../constants";
import {useState} from "react";

const EditDeleteWindow = ({movie}) => {
    const [showWindow, setShowWindow] = useState(false);
    const dispatch = useDispatch();

    const openModal = (e, modalName) => {
        e.stopPropagation();
        dispatch(setChosenMovie(movie));
        dispatch(setModal(modalName));
        setShowWindow(false);
    }

    return (
        <>
            <div className="movie-options" onClick={(e) => {
                e.stopPropagation();
                setShowWindow(true)
            }}>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
            </div>
            {showWindow && <div className={styles.editDeleteWindow}>
                <div className={styles.windowHeader}>
                    <button onClick={() => setShowWindow(false)} className="close-button">&#10005;</button>
                </div>
                <ul className={styles.windowOptions}>
                    <li onClick={(e) => openModal(e, constants.modals.EDIT)}>Edit
                    </li>
                    <li onClick={(e) => openModal(e, constants.modals.DELETE)}>Delete
                    </li>
                </ul>
            </div>}
        </>
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
    })
};

export default EditDeleteWindow;
