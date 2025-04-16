import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { sendMessage } from "../controller/message.controller.js";

export const isAuthenticated = (req, res, next) => {
    try{
        const token = req.cookies.access_token; // Get the token from cookies
        if (!token) {
            return next(errorHandler(401,"Unauthorized" )); // No token, unauthorized
        }
        jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return next(errorHandler(403, "Forbidden")); // Invalid token
            }
            req.user = user; // Attach user info to request object
            next(); // Proceed to the next middleware or route handler
        });
    }catch (error) {
            next(error); // Handle any other errors
        }
}
