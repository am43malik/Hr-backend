import pkg from "joi";
import CustomErrorHandler from "../services/CustomErrorHandler";
const { ValidationError } = pkg;

const errorHandler = (err, req, res, next) => {
  let statusCode = 404;
  let data = {
    message: err.message,
    ...(process.env.DEBUG_MODE === "true" && { originalError: err.message }),
  };

  if (err instanceof ValidationError) {
    statusCode: 505,
      (data = {
        message: err.message,
      });
  }

  if (err instanceof CustomErrorHandler) {
    statusCode: err.status,
      (data = {
        message: err.message,
      });
  }

  return res.status(statusCode).json(data);
};

export default errorHandler;
