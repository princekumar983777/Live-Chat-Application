import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res, next) => {
    try {
        const loggedInUserId = req.user.id;

        const allUserExceptLoggedInUser = await User.find({
            _id: { $ne: loggedInUserId },
        }).select("-password");

        res.status(200).json(allUserExceptLoggedInUser);
    } catch (error) {
        next(error);
    }
}

