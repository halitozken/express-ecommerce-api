import jwt from "jsonwebtoken";
import {
  isTokenIncluded,
  getAccessTokenFromHeader,
} from "../../helpers/authorization/tokenHelpers.js";
import CustomError from "../../helpers/error/CustomError.js";

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;

  if (!isTokenIncluded(req)) {
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }

  const accessToken = getAccessTokenFromHeader(req);

  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(
        new CustomError("You are not authorized to access this route", 401)
      );
    }

    req.user = {
      id: decoded.id,
      name: decoded.name,
      lastName: decoded.lastName,
    };

    next();
  });
};

export default getAccessToRoute;
