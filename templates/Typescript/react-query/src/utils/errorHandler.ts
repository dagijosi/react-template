import { toast } from "react-toastify";

// Custom error class for structured error handling
export class CustomError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Function to display toast notifications for errors
const showToastError = (message: string) => {
    toast.error(message);
};

// Centralized error handling function for various error types
export const handleError = (error: any) => {

    if (error instanceof CustomError) {
        // Handle based on statusCode if present
        switch (error.statusCode) {
            case 401:
                localStorage.clear();
                window.location.href = "/";
                break;
            case 400:
                showToastError(error.message);
                break;
            case 403:
                showToastError("Forbidden: You don't have permission to access this resource.");
                break;
            case 404:
                showToastError("Not Found: The requested resource was not found.");
                break;
            case 500:
                showToastError("Internal Server Error: Please try again later.");
                break;
            default:
                showToastError(error.message || "An unexpected error occurred.");
        }
    } else if (error instanceof Error) {
        showToastError(error.message);
    } else if (typeof error === "string") {
        showToastError(error);
    } else {
        showToastError("An unexpected error occurred.");
    }

    // Consider using Error Boundaries in React components for better UI error handling
};
