// Funções de autenticação
let currentUser = null;

// Simular usuário logado (em um projeto real, isso viria de uma sessão/token)
function getCurrentUser() {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
  currentUser = user;
}

function logout() {
  localStorage.removeItem("currentUser");
  currentUser = null;
  window.location.href = "/login";
}

// Login
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        // Em um projeto real, isso seria uma chamada para uma API de autenticação
        // Por enquanto, vamos simular com uma busca de usuários
        const response = await fetch("/users");
        const users = await response.json();

        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          setCurrentUser(user);
          window.location.href = "/home";
        } else {
          alert("Credenciais inválidas");
        }
      } catch (error) {
        console.error("Erro no login:", error);
        alert("Erro ao fazer login");
      }
    });
  }
});

// Verificar se usuário está logado
function checkAuth() {
  const user = getCurrentUser();
  if (!user && window.location.pathname !== "/login") {
    window.location.href = "/login";
    return false;
  }
  return true;
}

// Função para mostrar formulário de registro (placeholder)
function showRegisterForm() {
  alert("Funcionalidade de registro será implementada em breve!");
}
