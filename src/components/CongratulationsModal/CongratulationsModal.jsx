import "./CongratulationsModal.scss";
import PropTypes from "prop-types";

const CongratulationsModal = ({onClose, showCongratulationsModal}) => {
    if (!showCongratulationsModal) {
        return null;
    }

    return (
        <div className="overlay">
            <div className="modal-congratulations-window">
                <div className="modal-congratulations-header">
                    <button onClick={onClose} className="close-button">&#10005;</button>
                </div>
                <div className="modal-congratulations-body">
                    <div className="checkmark">
                        &#10003;
                    </div>
                    <h2>Congratulations!</h2>
                    <p>The movie has been added to <br /> database successfully </p>
                </div>
            </div>
        </div>
    );
};

CongratulationsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    showCongratulationsModal: PropTypes.bool.isRequired
}

export default CongratulationsModal;