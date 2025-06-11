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
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas da API
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/tasks", tasksRoutes);

// Função auxiliar para renderizar layout com conteúdo de página
function renderWithLayout(res, pagePath, pageTitle, currentPage) {
  res.render(pagePath, {}, (error, html) => {
    if (error) throw error;
    res.render("layout/main", {
      body: html,
      title: pageTitle,
      currentPage: currentPage,
    });
  });
}

// Rotas das páginas (views)
app.get("/", (req, res) => {
  renderWithLayout(res, "pages/login", "Login - OrganizaAi", "login");
});

app.get("/login", (req, res) => {
  renderWithLayout(res, "pages/login", "Login - OrganizaAi", "login");
});

app.get("/home", (req, res) => {
  renderWithLayout(
    res,
    "pages/home",
    "Gerenciador de Tarefas - OrganizaAi",
    "home"
  );
});

app.get("/novaTarefa", (req, res) => {
  renderWithLayout(
    res,
    "pages/novaTarefa",
    "Nova Tarefa - OrganizaAi",
    "novaTarefa"
  );
});

app.get("/novaCategoria", (req, res) => {
  renderWithLayout(
    res,
    "pages/novaCategoria",
    "Gerenciador de Categorias - OrganizaAi",
    "novaCategoria"
  );
});

app.get("/perfil", (req, res) => {
  renderWithLayout(res, "pages/perfil", "Perfil - OrganizaAi", "perfil");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
