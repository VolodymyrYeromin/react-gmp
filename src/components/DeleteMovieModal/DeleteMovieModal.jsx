import "./deleteMovieModal.scss";

const DeleteMovieModal = ({showDeleteModal, onClose, index, moviesState, setMoviesState, closeDeleteWindow}) => {
    if (!showDeleteModal) {
        return null;
    }

    const deleteMovie = (e) => {
        e.preventDefault();
        moviesState.splice(index, 1);
        setMoviesState([...moviesState]);
        onClose();
        closeDeleteWindow();
    }

    return (
        <div className="overlay">
            <div className="modal-delete-window">
                <div className="modal-top">
                    <button onClick={onClose} className="close-button">&#10005;</button>
                </div>
                <div className="modal-body">
                    <h2>Delete movie</h2>
                    <p>Are you sure you want to delete this movie?</p>
                    <button onClick={deleteMovie}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteMovieModal;