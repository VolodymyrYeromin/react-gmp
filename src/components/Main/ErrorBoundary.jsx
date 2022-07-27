import React from "react";
import styles from "./errorBoundary.module.scss"

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2 className={styles.errorMessage}>Oops, something went wrong... We are doing our best to fix this issue</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
