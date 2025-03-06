const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); 

const PORT = 3000;

app.get("/api/greet", (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome to YoungLab.` });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
