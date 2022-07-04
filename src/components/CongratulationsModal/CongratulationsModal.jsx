import "./CongratulationsModal.scss";

const CongratulationsModal = () => {
    return (
        <div className="congratulations-modal">
            <div className="checkmark">
                &#10003;
            </div>
            <h3>Congratulations!</h3>
            <p>The movie has been added to <br/> database successfully </p>
        </div>
    );
};

export default CongratulationsModal;
