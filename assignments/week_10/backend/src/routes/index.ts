import express from "express";
import userRouter from "./userRouter";
import todoRouter from "./todoRouter";

const router = express.Router();

router.use("/user", userRouter);
router.use("/todos", todoRouter);

export default router;
