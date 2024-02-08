import express from "express";
import cors from "cors";

import routes from "./routes/index";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

app.listen(PORT, () => {
    console.log("Server is up on http://localhost:3000");
});
