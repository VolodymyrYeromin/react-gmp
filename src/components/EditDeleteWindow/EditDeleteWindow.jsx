import './editDeleteWindow.scss'

const EditDeleteWindow = ({showWindow, onClose}) => {
    if (!showWindow) {
        return null;
    }

    return (
        <div className="edit-delete-window">
            <div className="window-header">
                <button onClick={onClose} className="close-button">&#10005;</button>
            </div>
            <ul className="window-options">
                <li>Edit</li>
                <li>Delete</li>
            </ul>
        </div>
    );
};

export default EditDeleteWindow;