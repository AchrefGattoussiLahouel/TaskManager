


class ValidationError extends Error {
  constructor(message, statusCode = 400, details = null, retryable = false) {
    super(message); 
        this.name = "ValidationError";
        this.statusCode = statusCode;
        this.details = details;
        this.retryable = retryable;
        Error.captureStackTrace(this, this.constructor);
  }

}


export default ValidationError;