import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/assignment"

mongoose.connect(MONGODB_URL)

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

export const User = mongoose.model("user", userSchema);
