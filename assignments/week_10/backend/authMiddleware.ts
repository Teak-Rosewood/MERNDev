import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
    const secret = process.env.JWT_SECRET || "secret";
    const authHeader: string = req.body.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({
            message: "Invalid Authentication Token",
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, secret) || { userId: "invalid" };
        if (typeof decoded !== "string") req.body.userId = decoded.userId;
        next();
    } catch (e) {
        return res.status(400).json({
            message: "Invalid Authentication Token",
        });
    }
};

export default authMiddleware;
