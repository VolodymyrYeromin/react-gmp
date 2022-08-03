import styles from "./notFound.module.scss"
import {FC} from "react";

const NotFound: FC = () => {
    return (
        <h1 className={styles.pageNotFound}>
            404 error. Page not found
        </h1>
    );
};

export default NotFound;
