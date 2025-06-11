// Gerenciamento de tarefas
let tasks = [];
let categories = [];

// Carregar dados iniciais
document.addEventListener("DOMContentLoaded", function () {
  if (!checkAuth()) return;

  loadCategories();
  loadTasks();
  setupFilters();
});

// Carregar categorias
async function loadCategories() {
  try {
    const response = await fetch("/categories");
    categories = await response.json();

    // Atualizar filtro de categorias
    const categoryFilter = document.getElementById("categoryFilter");
    if (categoryFilter) {
      categoryFilter.innerHTML = '<option value="">Categoria</option>';
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categoryFilter.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Erro ao carregar categorias:", error);
  }
}

// Carregar tarefas
async function loadTasks() {
  try {
    const response = await fetch("/tasks");
    tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
  }
}

// Renderizar tarefas
function renderTasks(tasksToRender) {
  const tasksList = document.getElementById("tasksList");
  if (!tasksList) return;

  if (tasksToRender.length === 0) {
    tasksList.innerHTML =
      '<p class="text-center" style="color: #666; margin-top: 40px;">Nenhuma tarefa encontrada</p>';
    return;
  }

  tasksList.innerHTML = tasksToRender
    .map((task) => {
      const category = categories.find((c) => c.id === task.category_id);
      const categoryName = category ? category.name : "Sem categoria";

      const statusClass = getStatusClass(task.status);
      const formattedDate = task.due_date
        ? formatDate(task.due_date)
        : "Sem prazo";

      return `
            <div class="task-card" data-task-id="${task.id}">
                <div class="task-title">${task.title}</div>
                <div class="task-description">${task.description || ""}</div>
                <div class="task-meta">
                    <span>Vencimento: ${formattedDate}</span>
                    <span class="task-status ${statusClass}">${
        task.status
      }</span>
                </div>
                <div class="task-meta">
                    <span>Categoria: ${categoryName}</span>
                    <div>
                        <button class="btn-small btn-secondary" onclick="editTask(${
                          task.id
                        })">Editar</button>
                        <button class="btn-small btn-danger" onclick="deleteTask(${
                          task.id
                        })">Excluir</button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

// Configurar filtros
function setupFilters() {
  const categoryFilter = document.getElementById("categoryFilter");
  const statusFilter = document.getElementById("statusFilter");

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterTasks);
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", filterTasks);
  }
}

// Filtrar tarefas
function filterTasks() {
  const categoryFilter = document.getElementById("categoryFilter").value;
  const statusFilter = document.getElementById("statusFilter").value;

  let filteredTasks = tasks;

  if (categoryFilter) {
    filteredTasks = filteredTasks.filter(
      (task) => task.category_id == categoryFilter
    );
  }

  if (statusFilter) {
    filteredTasks = filteredTasks.filter(
      (task) => task.status === statusFilter
    );
  }

  renderTasks(filteredTasks);
}

// Adicionar nova tarefa
function addNewTask() {
  window.location.href = "/novaTarefa";
}

// Editar tarefa
function editTask(taskId) {
  // Implementar edição de tarefa
  alert(`Editar tarefa ${taskId} - Funcionalidade será implementada!`);
}

// Deletar tarefa
async function deleteTask(taskId) {
  if (!confirm("Tem certeza que deseja excluir esta tarefa?")) {
    return;
  }

  try {
    const response = await fetch(`/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      loadTasks(); // Recarregar lista
    } else {
      alert("Erro ao excluir tarefa");
    }
  } catch (error) {
    console.error("Erro ao excluir tarefa:", error);
    alert("Erro ao excluir tarefa");
  }
}

// Funções utilitárias
function getStatusClass(status) {
  switch (status) {
    case "Pendente":
      return "status-pendente";
    case "Concluída":
      return "status-concluida";
    case "Vencimento":
      return "status-vencimento";
    default:
      return "status-pendente";
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}
