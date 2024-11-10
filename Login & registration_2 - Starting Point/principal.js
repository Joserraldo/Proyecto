const username = document.getElementById("loginUsername").value;

// Verificar que haya un usuario registrado y mostrarlo
if (username) {
  document.getElementById("usernameDisplay").textContent = username;
} else {
  // Si no hay usuario registrado, redirigir al inicio de sesión
  window.location.href = "index.html";
}