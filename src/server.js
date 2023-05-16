import express from "express";
import cors from "cors";
import routers from "./routes/index.js";
import "dotenv/config.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(routers)
app.use((err, req, res, next) => {
    return res.json({ error: err.message || "Internal Server Error" }).status(err.status || 500);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
