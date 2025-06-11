// Nova tarefa
document.addEventListener("DOMContentLoaded", function () {
  if (!checkAuth()) return;

  loadCategories();
  setupForm();
});

// Carregar categorias para o select
async function loadCategories() {
  try {
    const response = await fetch("/categories");
    const categories = await response.json();

    const categorySelect = document.getElementById("category_id");
    if (categorySelect) {
      categorySelect.innerHTML =
        '<option value="">Selecione uma categoria</option>';
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Erro ao carregar categorias:", error);
  }
}

// Configurar formulário
function setupForm() {
  const form = document.getElementById("newTaskForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
}

// Manipular envio do formulário
async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const currentUser = getCurrentUser();

  const taskData = {
    title: formData.get("title"),
    description: formData.get("description"),
    due_date: formData.get("due_date") || null,
    status: formData.get("status"),
    user_id: currentUser ? currentUser.id : 1, // Usar ID do usuário logado
    category_id: formData.get("category_id") || null,
  };

  try {
    const response = await fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (response.ok) {
      alert("Tarefa criada com sucesso!");
      window.location.href = "/home";
    } else {
      const error = await response.json();
      alert("Erro ao criar tarefa: " + error.error);
    }
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    alert("Erro ao criar tarefa");
  }
}
