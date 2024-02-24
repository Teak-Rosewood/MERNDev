import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, verify, sign } from "hono/jwt";

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables: {
        userId?: string;
    };
}>();

app.post("/api/v1/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try {
        const data = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            },
        });
        const jwt = await sign({ user: data.id }, c.env.JWT_SECRET);
        return c.json({ message: "User created successfully", jwt: jwt });
    } catch (e) {
        return c.json({ message: "Unable to create User" });
    }
});

app.post("/api/v1/login", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        });
        if (!user) {
            return c.json({ message: "User doesn't exist" });
        }
        if (user.password === body.password) {
            const jwt = sign({ user: user.id }, c.env.JWT_SECRET);
            return c.json({ jwt: jwt });
        }
        return c.json({ message: "Incorrect Password" });
    } catch (e) {
        return c.json({ message: "Unable to login" });
    }
});

app.use("/api/v1/blog/*", async (c, next) => {
    const token = c.req.header("Authorization");
    if (!token) {
        return c.json({ message: "jwt not provided" });
    }
    try {
        const message = await verify(token, c.env.JWT_SECRET);
        c.set("userId", message.user);
        await next();
    } catch (e) {
        return c.json({ message: "Authentication Failed" });
    }
});

app.post("/api/v1/blog", (c) => {
    const a = c.get("userId");
    return c.json({ message: "Post, Blog Route", userId: a });
});

app.get("api/v1/blog/:id", (c) => {
    return c.text("Get, Blog Route");
});

app.put("api/v1/blog", (c) => {
    return c.text("Put, Blog Route");
});

app.get("api/v1/blogs", (c) => {
    return c.text("Get list of Blogs");
});

export default app;
