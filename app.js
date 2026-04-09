const eyeOpen =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FC5C3A"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg>';

const eyeClosed =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FC5C3A"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>';

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    btn.innerHTML = eyeClosed;
  } else {
    input.type = "password";
    btn.innerHTML = eyeOpen;
  }
}

// ===== POPUP =====
function showPopup(message) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-message");

  text.textContent = message;
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// VALIDACIONES DEL FORMULARIO
document.getElementById("registerForm").addEventListener("submit", function () {
  const name = document.getElementById("name").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;
  const privacy = document.getElementById("privacy").checked;

  // Nombre
  if (name.length < 1) {
    showPopup("Ingresa un nombre válido");
    return;
  }

  // Apellido
  if (lastname.length < 1) {
    showPopup("Ingresa un apellido válido");
    return;
  }

  // Teléfono (solo números y típico celular)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    showPopup("Ingresa un número de celular válido (10 dígitos)");
    return;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showPopup("Ingresa un correo electrónico válido");
    return;
  }

  // Contraseña
  if (password.length < 8) {
    showPopup("La contraseña debe tener mínimo 8 caracteres");
    return;
  }

  // Confirmación
  if (password !== confirmPassword) {
    showPopup("Las contraseñas no coinciden");
    return;
  }

  if (!terms) {
    showPopup("Debes aceptar los Términos y Condiciones");
    return;
  }

  if (!privacy) {
    showPopup("Debes autorizar el tratamiento de datos personales");
    return;
  }

  // Éxito
  showPopup("Te has registrado exitosamente. ¡Bienvenid@ "+name+"!");
});
