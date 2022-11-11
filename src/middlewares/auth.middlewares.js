import dotenv from "dotenv";
import userService from "../services/user.service.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const authMiddleware = (req, res, next) => {

    try {

        const { authorization } = req.headers;

    if (!authorization) {

        return res.sendStatus(401);

    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {

        return res.sendStatus(401);

    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {

        return res.sendStatus(401);

    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {

        if (error) {

            return res.status(401).send({ message: "Token Invalid" });

        }

        const user = await userService.findByIdService(decoded._id);

        if (!user || !user.id) {

            return res.status(401).send({ message: "User not found" });
        }

        req.userId = user.id;

        return next();

    });
        
    } catch (err) {
        
        req.status(500).send({ message: err.message });

    }

};