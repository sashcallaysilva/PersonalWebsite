import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

/** APIs */
app.get("/", (req, res) => {
    res.send("API is running");
});

// GET Blogs
app.get("/api/blogs", blogRoutes);


/** RUN SERVER */
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));