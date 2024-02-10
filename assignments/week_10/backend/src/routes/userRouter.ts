import express from "express";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import z from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

const userInfo = z.object({
    username: z.string().email(),
    password: z.string(),
});

dotenv.config();

const router = express.Router();
const prisma = new PrismaClient();

router.post("/signup", async (req: express.Request, res: express.Response) => {
    // Zod validation
    const { success } = userInfo.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid username or password",
        });
    }

    // Validating if user exists
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        },
    });
    if (Boolean(user)) {
        return res.status(400).json({
            message: "Username already exists",
        });
    }

    // Creating User
    const SALTROUNDS = Number(process.env.SALTROUNDS) || 10;
    const passwordHash = await bcrypt.hash(req.body.password, SALTROUNDS);
    const newUser = await prisma.user.create({
        data: {
            username: req.body.username,
            password: passwordHash,
        },
    });

    const JWT_SECRET = process.env.JWT_SECRET || "secret";
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token,
    });
});

router.post("/login", async (req: express.Request, res: express.Response) => {
    // Zod Validation
    const { success } = userInfo.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid Inputs",
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        },
    });

    if (user === null) {
        return res.status(400).json({
            message: "Username not Found",
        });
    }
    const result = await bcrypt.compare(req.body.password, user.password);
    const JWT_SECRET = process.env.JWT_SECRET || "secret";
    if (result === true) {
        const token = jwt.sign({ id: user.id }, JWT_SECRET);
        return res.json({
            token: token,
        });
    }

    res.status(400).json({
        message: "Invalid Password",
    });
});

export default router;
