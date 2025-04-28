import { FiRepeat } from "react-icons/fi";
import React from "react";

interface ErrorMessageProps {
    message?: string;
    onRetry?: () => void;
    retryText?: string; // Optional custom text for the retry button
    isLoading?: boolean; // Optional loading state for the retry button
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry, retryText = "Try Again", isLoading = false }) => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-center"
            role="alert" // Role to indicate an alert message
            aria-live="assertive" // Ensure screen readers announce the error
        >
            <div className="max-w-md w-full items-center">
                <img
                    src="/image/error.png"
                    alt="Error occurred"
                    className="w-32 mx-auto mb-4"
                />
                <h1 className="text-3xl font-semibold text-gray-800 mb-2">Something went wrong.</h1>
                <p className="text-gray-600 mb-6">{message}</p>
                {onRetry && (
                    <div className="flex justify-center"> {/* Center the button container */}
                        <button
                            onClick={onRetry}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition-all duration-200 transform active:scale-95 flex items-center justify-center"
                            disabled={isLoading} // Disable the button while loading
                        >
                            {isLoading ? (
                                <div className="animate-spin w-5 h-5 border-4 border-t-transparent border-white rounded-full mr-2" />
                            ) : (
                                <FiRepeat className="mr-2" />
                            )}
                            {isLoading ? "Retrying..." : retryText}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorMessage;
