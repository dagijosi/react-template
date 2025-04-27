import React from "react";
import ErrorMessage from "./ErrorMessage";

interface ErrorBoundaryProps {
    onRetry?: () => void;
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {hasError: false, error: null};

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {hasError: true, error};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    handleRetry = () => {
        this.props.onRetry?.();
        this.setState({hasError: false, error: null});
    };

    render() {
        if (this.state.hasError) {
            return (
                <ErrorMessage
                    message={this.state.error?.message}
                    onRetry={this.handleRetry}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
