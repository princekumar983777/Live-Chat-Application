import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password, confirmPassword, gender } = req.body;

    let validUser;

    // Check if user already exists
    validUser = await User.findOne({ email });

    if (validUser) {
        return next(errorHandler(400, "User already exist"));
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        return next(errorHandler(400, "Password doesn't match"));
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Generate profile picture based on gender
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    try {
        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

        // Save the user to the database
        await newUser.save();

        // Send response with token and user details
        res.cookie("access_token", token, { httpOnly: true }).status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        let validUser;

        // Check if user already exists
        validUser = await User.findOne({ email });

        if (!validUser) {
            return next(errorHandler(400, "No user found with this email"));
        }
        // Check if password is correct
        let validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Invalid password"))
        }
        // Generate JWT token
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        // Send response with token and user details

        res.cookie("access_token", token, { httpOnly: true }).status(200).json({
            _id: validUser._id,
            username: validUser.username,
            email: validUser.email,
            profilePic: validUser.profilePic,
        })

    } catch (error) {
        next(error);
    }


}

export const logout = (req, res) => {
    try {
        res.clearCookie("access_token");
        
        res.status(200).json({
            message : "User has been logged out"
        })
    }
    catch (error) {
        next(error);
    }
}

