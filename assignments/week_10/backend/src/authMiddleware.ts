import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const secret = process.env.JWT_SECRET || "secret";
    const authHeader: string | boolean = req.headers.authorization || false;
    if (typeof authHeader == "boolean" || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({
            message: "Invalid Authentication Token",
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, secret) || { id: "invalid" };
        if (typeof decoded !== "string") req.body.userId = decoded.id;
        next();
    } catch (e) {
        return res.status(400).json({
            message: "Invalid Authentication Token",
        });
    }
};

export default authMiddleware;
