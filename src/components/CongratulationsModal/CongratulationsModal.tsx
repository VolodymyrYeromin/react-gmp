import styles from "./CongratulationsModal.module.scss";
import {FC} from "react";

const CongratulationsModal: FC = () => {
    return (
        <div className={styles.congratulationsModal}>
            <div className={styles.checkmark}>
                &#10003;
            </div>
            <h3>Congratulations!</h3>
            <p>The movie has been added to <br/> database successfully </p>
        </div>
    );
};

export default CongratulationsModal;
