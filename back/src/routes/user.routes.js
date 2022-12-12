//Import lines
import { Router } from "express";
const route = Router();

import userController from "../controllers/user.controller.js";

import { validId, validUser } from "../middlewares/global.middlewares.js";

//Router http requests
route.post("/", userController.create);//Router http request to create user
route.get("/", userController.findAll);//Router http request to get all user from the database
route.get("/:id", validId, validUser, userController.findById);//Router request from get one specific user fom the database
route.patch("/:id", validId, validUser, userController.update);//Router request to update a user from the database
route.delete("/:id", validId, userController.remove);//Router request to delete a specific user from the database

export default route