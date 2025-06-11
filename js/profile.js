// Gerenciamento de perfil
document.addEventListener("DOMContentLoaded", function () {
  if (!checkAuth()) return;

  loadUserProfile();
  setupForm();
});

// Carregar dados do perfil
function loadUserProfile() {
  const currentUser = getCurrentUser();
  if (currentUser) {
    document.getElementById("name").value = currentUser.name || "";
    document.getElementById("email").value = currentUser.email || "";
  }
}

// Configurar formulário
function setupForm() {
  const form = document.getElementById("profileForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
}

// Manipular envio do formulário
async function handleSubmit(e) {
  e.preventDefault();

  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const formData = new FormData(e.target);
  const userData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password") || currentUser.password, // Manter senha atual se não informada
  };

  try {
    const response = await fetch(`/users/${currentUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setCurrentUser(updatedUser);
      alert("Perfil atualizado com sucesso!");
    } else {
      const error = await response.json();
      alert("Erro ao atualizar perfil: " + error.error);
    }
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    alert("Erro ao atualizar perfil");
  }
}
