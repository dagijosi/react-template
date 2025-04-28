import {CustomError} from "./errorHandler.ts";

export function handleApiErrors(response: Response, errorMessage: string) {
    if (!response.ok) {
        throw new CustomError(errorMessage, response.status); // Throws structured error for further handling
    }
    return response;
}
