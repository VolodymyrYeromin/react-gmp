import React, { Component, ErrorInfo, ReactNode } from "react";
import styles from "./errorBoundary.module.scss";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <h2 className={styles.errorMessage}>Oops, something went wrong... We are doing our best to fix this issue</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
