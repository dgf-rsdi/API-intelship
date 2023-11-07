function errorHandler(err, req, res, next) {
  let code = 500;
  let msg = "Internal server error";

  console.log(err);
  console.log(
    "🚀 ~ file: errorHandler.js ~ line 6 ~ errorHandler ~ err.name",
    msg = err.name
  );
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      msg = err.errors[0].message;
      code = 400;
      break;
    case "Invalid email/password":
      msg = err.name;
      code = 401;
      break;
    case "SyntaxError":
    case "JsonWebTokenError":
    case "Invalid token":
      msg = "Invalid token";
      code = 401;
      break;
    case "Forbidden":
      msg = "Forbidden";
      code = 403;
      break;
    case "Not found":
      msg = "Data not found";
      code = 404;
      break;
  }

  res.status(code).json({ message: msg });
}

module.exports = errorHandler;