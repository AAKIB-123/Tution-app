import { model } from "mongoose";
import bcrypt from 'bcryptjs';

const User = model("User");

model("User", {
    name: String,
    email: String + { unique: true },
    mobile: String,
    password: String,
    role: String, default: "admin", roles: ["admin", "student"],
    isActive: Boolean, default: true
});



