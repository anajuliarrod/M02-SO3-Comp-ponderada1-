const express = require("express");
const app = express();
const port = 3000;

const usersRoutes = require("./routes/userRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const tasksRoutes = require("./routes/tasksRoutes");

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/tasks", tasksRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
