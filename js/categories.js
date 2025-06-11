// Gerenciamento de categorias
let categories = [];

document.addEventListener("DOMContentLoaded", function () {
  if (!checkAuth()) return;

  loadCategories();
  setupNewCategoryInput();
});

// Carregar categorias
async function loadCategories() {
  try {
    const response = await fetch("/categories");
    categories = await response.json();
    renderCategories();
  } catch (error) {
    console.error("Erro ao carregar categorias:", error);
  }
}

// Renderizar categorias
function renderCategories() {
  const categoriesList = document.getElementById("categoriesList");
  if (!categoriesList) return;

  if (categories.length === 0) {
    categoriesList.innerHTML =
      '<p class="text-center" style="color: #666; margin-top: 40px;">Nenhuma categoria encontrada</p>';
    return;
  }

  categoriesList.innerHTML = categories
    .map(
      (category) => `
        <div class="category-item" data-category-id="${category.id}">
            <span class="category-name">${category.name}</span>
            <div class="category-actions">
                <button class="btn-small btn-secondary" onclick="editCategory(${category.id}, '${category.name}')">✏️</button>
                <button class="btn-small btn-danger" onclick="deleteCategory(${category.id})">🗑️</button>
            </div>
        </div>
    `
    )
    .join("");
}

// Configurar input de nova categoria
function setupNewCategoryInput() {
  const input = document.getElementById("newCategoryName");
  if (input) {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addCategory();
      }
    });
  }
}

// Adicionar categoria
async function addCategory() {
  const input = document.getElementById("newCategoryName");
  const name = input.value.trim();

  if (!name) {
    alert("Por favor, digite um nome para a categoria");
    return;
  }

  try {
    const response = await fetch("/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      input.value = "";
      loadCategories(); // Recarregar lista
    } else {
      const error = await response.json();
      alert("Erro ao criar categoria: " + error.error);
    }
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    alert("Erro ao criar categoria");
  }
}

// Editar categoria
async function editCategory(categoryId, currentName) {
  const newName = prompt("Digite o novo nome da categoria:", currentName);

  if (!newName || newName.trim() === "") {
    return;
  }

  try {
    const response = await fetch(`/categories/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName.trim() }),
    });

    if (response.ok) {
      loadCategories(); // Recarregar lista
    } else {
      const error = await response.json();
      alert("Erro ao atualizar categoria: " + error.error);
    }
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    alert("Erro ao atualizar categoria");
  }
}

// Deletar categoria
async function deleteCategory(categoryId) {
  if (!confirm("Tem certeza que deseja excluir esta categoria?")) {
    return;
  }

  try {
    const response = await fetch(`/categories/${categoryId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      loadCategories(); // Recarregar lista
    } else {
      const error = await response.json();
      alert("Erro ao excluir categoria: " + error.error);
    }
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    alert("Erro ao excluir categoria");
  }
}
