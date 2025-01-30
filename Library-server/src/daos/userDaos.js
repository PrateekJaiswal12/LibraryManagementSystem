import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        }

    },
    {
        versionKey: false
    }
);

export const User = mongoose.model("User", userSchema);