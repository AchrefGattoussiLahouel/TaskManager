



class AuthorizationError extends Error {
  constructor(message, statusCode = 403, details = null, retryable = false) {
    super(message); 
        this.name = "AuthorizationError";
        this.statusCode = statusCode;
        this.details = details;
        this.retryable = retryable;
        Error.captureStackTrace(this, this.constructor);
  }
}


export default AuthorizationError;