import { min } from "@xenova/transformers";
import { profile } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type : String,
        required: true,
        enum : [ 'male' , 'female'],
    },
    profilePic: {
        type: String,
        default:"",
    },
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;