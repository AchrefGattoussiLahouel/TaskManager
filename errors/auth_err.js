

class AuthError extends Error {
  constructor(message, statusCode, details = null, retryable = false) {
    super(message);
    this.name = "AuthError";
    this.statusCode = statusCode;
    this.details = details;
    this.retryable = retryable;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AuthError;