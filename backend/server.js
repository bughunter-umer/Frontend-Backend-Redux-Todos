const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const todo = require("./models/todo");
const todoRoutes = require("./routes/todo.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

// Sync DB
sequelize.sync().then(() => {
  console.log("✅ Database synced");
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
