import express from "express";
import * as userRouter from "./userRouter";
import * as todoRouter from "./todoRouter";

const router = express.router();

router.use("/user", userRouter);
router.use("/todos", todoRouter);

export default router;
