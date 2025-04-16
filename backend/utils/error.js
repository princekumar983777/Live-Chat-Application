export const errorHandler = (status, message) => {
    const error = new Error(); // Create a new error object
    error.message = message; // Attach the message to the error object
    error.status = status; // Attach the status code
    return error; // Return the error object
};