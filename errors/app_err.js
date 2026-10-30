



class AppError extends Error {
    constructor(message, statusCode, status, details = null, retryable = false, ) {
        super(message);
        this.statusCode = statusCode;
        this.status = status;
        this.details = details;
        this.retryable = retryable;
        Error.captureStackTrace(this, this.constructor);
    }
}


export default AppError;