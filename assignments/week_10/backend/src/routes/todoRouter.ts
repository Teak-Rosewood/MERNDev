import express from "express";
import authMiddleware from "../authMiddleware";
import { PrismaClient } from "@prisma/client";
import z from "zod";

const router = express.Router();
const prisma = new PrismaClient();

const todoObject = z.object({
    title: z.string(),
    description: z.string(),
});

const updatedTodoObejct = z.object({
    id: z.number(),
    status: z.boolean(),
});

router.get("/", authMiddleware, async (req: express.Request, res: express.Response) => {
    // Getting all the todos of the user
    const todos = await prisma.toDoList.findMany({
        where: {
            userId: req.body.userId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            completed: true,
        },
    });

    if (!todos) {
        return res.status(400).json({
            message: "There was an error accessing ToDos",
        });
    }

    res.json(todos);
});

router.post("/createTodo", authMiddleware, async (req: express.Request, res: express.Response) => {
    const { success } = todoObject.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            message: "Invalid values received",
        });
    }

    const todo = await prisma.toDoList.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId,
            completed: false,
        },
    });

    if (!todo) {
        return res.status(400).json({
            message: "There was an error creating Todo",
        });
    }

    const message = "Todo Created with id:" + todo.id;

    res.json({
        message: message,
    });
});

router.post("/updateTodo", authMiddleware, async (req: express.Request, res: express.Response) => {
    const { success } = updatedTodoObejct.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            message: "Invalid format for ToDos",
        });
    }
    const updated = await prisma.toDoList.update({
        where: {
            id: req.body.id,
        },
        data: {
            completed: req.body.status,
        },
    });

    if (!updated) {
        return res.status(400).json({
            message: "There was an error updating Todo",
        });
    }

    res.json({
        message: "Todo status updated",
    });
});

router.post("/deleteTodo", authMiddleware, async (req: express.Request, res: express.Response) => {
    const deleted = await prisma.toDoList.delete({
        where: {
            id: req.body.id,
        },
    });
    if (!deleted) {
        return res.status(400).json({
            message: "There was an error deleting Todo",
        });
    }

    res.json({
        message: "Todo deleted",
    });
});

export default router;
