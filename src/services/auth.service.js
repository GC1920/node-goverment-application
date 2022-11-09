import User from "../models/User.js";
import jwt from "jsonwebtoken";

//This field is for user login authentication
const loginService = (email) => User.findOne({ email: email }).select("+password");

//This field is for generate session token, and expiration time
const generateToken = (id) => jwt.sign({_id: id}, process.env.SECRET_JWT, { expiresIn: 86400 });

export { loginService, generateToken }