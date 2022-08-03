import styles from './editDeleteWindow.module.scss'
import {useDispatch} from "react-redux";
import {setChosenMovie, setModal} from "../../redux/features/modal/modalSlice";
import constants from "../../constants";
import {FC, useState} from "react";
import {movieType} from "../../types";
import {AppDispatch} from "../../redux/store";

const EditDeleteWindow: FC<{movie: movieType}> = ({movie}) => {
    const [showWindow, setShowWindow] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

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

export default EditDeleteWindow;
