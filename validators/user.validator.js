import Joi from "joi";
import ValidationError from "../errors/validation_err.js";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).required();

export const validateSignup = (req, res, next) => {
  const { error, value } = userSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    console.log("error", error)
    const errorsByField = error.details.reduce((errors, { message, path }) => {
      const field = path.join(".");
      errors[field] = errors[field] || [];
      errors[field].push(message);
      return errors;
    }, {});

    const authError = new ValidationError(
      "Validation error",
      errorsByField,
      false,
    );

    return res.status(authError.statusCode).json({
      error: authError.message,
      details: authError.details,
      retryable: authError.retryable,
    });
  }

  req.body = value;
  next();
};

export const validateLogin = validateSignup;
