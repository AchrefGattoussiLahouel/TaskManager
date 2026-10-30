


class NotFoundError extends Error {
  constructor(message, statusCode = 404, details = null, retryable = false) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = statusCode;
    this.details = details;
    this.retryable = retryable;
    Error.captureStackTrace(this, this.constructor);
  } 

}


export default NotFoundError;