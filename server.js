const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const usersRoutes = require("./routes/userRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const tasksRoutes = require("./routes/tasksRoutes");

// Configurar EJS como engine de template
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares para arquivos estáticos
app.use("/css", express.static(path.join(__dirname, "views/css")));
app.use("/js", express.static(path.join(__dirname, "js"))); // Caminho atualizado
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas da API
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/tasks", tasksRoutes);

// Rotas das páginas (views) - usando layout
app.get("/", (req, res) => {
  res.render("layout/main", {
    body: res.render("pages/login", {}, (err, html) => html),
    title: "Login - OrganizaAi",
    currentPage: "login",
  });
});

app.get("/login", (req, res) => {
  res.render("layout/main", {
    body: res.render("pages/login", {}, (err, html) => html),
    title: "Login - OrganizaAi",
    currentPage: "login",
  });
});

app.get("/home", (req, res) => {
  res.render("layout/main", {
    body: res.render("pages/home", {}, (err, html) => html),
    title: "Gerenciador de Tarefas - OrganizaAi",
    currentPage: "home",
  });
});

app.get("/novaTarefa", (req, res) => {
  res.render("layout/main", {
    body: res.render("pages/novaTarefa", {}, (err, html) => html),
    title: "Nova Tarefa - OrganizaAi",
    currentPage: "novaTarefa",
  });
});

app.get("/novaCategoria", (req, res) => {
  res.render("layout/main", {
    body: res.render("pages/novaCategoria", {}, (err, html) => html),
    title: "Gerenciador de Categorias - OrganizaAi",
    currentPage: "novaCategoria",
  });
});

app.get("/perfil", (req, res) => {
  res.render("layout/main", {
    body: res.render("pages/perfil", {}, (err, html) => html),
    title: "Perfil - OrganizaAi",
    currentPage: "perfil",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
