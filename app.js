const selector = document.querySelector(".language-selector");
const selected = document.getElementById("selectedLang");
const options = document.getElementById("langOptions");

// Abrir/cerrar dropdown de idiomas
selected.addEventListener("click", () => {
  selector.classList.toggle("active");
});

// Función para seleccionar idioma
document.querySelectorAll(".lang-option").forEach((opt) => {
  opt.addEventListener("click", () => {
    const lang = opt.getAttribute("data-lang");

    currentLang = lang;
    localStorage.setItem("lang", lang);

    selected.innerHTML = opt.innerHTML;

    applyTranslations();
    selector.classList.remove("active");
  });
});


// Cargar idioma guardado al iniciar
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    currentLang = savedLang;

    const selectedOption = document.querySelector(
      `.lang-option[data-lang="${savedLang}"]`,
    );

    if (selectedOption) {
      selected.innerHTML = selectedOption.innerHTML;
    }

    applyTranslations();
  }
});


// Función para mostrar/ocultar contraseña
const eyeOpen =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FC5C3A"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z" /></svg>';

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


// Prefijo internacional
const phoneInput = document.querySelector("#phone");

const iti = window.intlTelInput(phoneInput, {
  initialCountry: "co",
  onlyCountries: ["co", "mx", "br", "cl", "pe", "ec"],
  separateDialCode: true,
});


// Notificaciones popup
function showPopup(message) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-message");

  text.textContent = message;

  // Traducir el botón del popup según el idioma actual
  document.querySelector("#popup button").innerText =
    currentLang === "en"
      ? "Got it"
      : currentLang === "pt"
        ? "Entendi"
        : "Entendido";

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}


// Validación del formulario
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;
    const privacy = document.getElementById("privacy").checked;

    // Validaciones
    if (name.length < 1) return showPopup(getMsg("name"));
    if (lastname.length < 1) return showPopup(getMsg("lastname"));
    if (!iti.isValidNumber()) return showPopup(getMsg("phone"));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return showPopup(getMsg("email"));

    if (password.length < 8) return showPopup(getMsg("password"));
    if (password !== confirmPassword) return showPopup(getMsg("match"));
    if (!terms) return showPopup(getMsg("terms"));
    if (!privacy) return showPopup(getMsg("privacy"));

    const fullPhone = iti.getNumber();
    showPopup(getMsg("success", name, fullPhone));
  });



// Traducciones en un solo objeto para fácil acceso
const translations = {
  es: {
    title: "Únete a Sístole.\nY se parte de nuestros beneficios:",
    benefits: [
      "Encuentra servicios médicos",
      "Fácil manejo de tu historial",
      "Ofrece tus servicios",
    ],
    name: "Nombres",
    lastname: "Apellidos",
    phone: "Teléfono celular",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    termsPrefix: "Acepto los",
    termsLink: "Términos y Condiciones",
    termsSuffix: "de uso",
    privacyPrefix:
      "Autorizo el tratamiento de mis datos personales de acuerdo con el",
    privacyLink: "Aviso de Privacidad",
    register: "Registrar",
    login: "Ya tienes una cuenta?",
    popup: {
      name: "Ingresa un nombre válido",
      lastname: "Ingresa un apellido válido",
      phone: "Número de celular inválido",
      email: "Ingresa un correo electrónico válido",
      password: "La contraseña debe tener mínimo 8 caracteres",
      match: "Las contraseñas no coinciden",
      terms: "Debes aceptar los Términos y Condiciones",
      privacy: "Debes autorizar el tratamiento de datos personales",
      success: (name) =>
        `Te has registrado exitosamente. ¡Bienvenid@ ${name}!`,
    },
    placeholders: {
      name: "Nombre",
      lastname: "Apellidos",
      email: "Email",
    },
    hint: "mínimo 8 caracteres",
  },

  en: {
    title: "Join Sístole.\nAnd be part of our benefits:",
    benefits: [
      "Find medical services",
      "Easy management of your history",
      "Offer your services",
    ],
    name: "First Name",
    lastname: "Last Name",
    phone: "Mobile Phone",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    termsPrefix: "I accept the",
    termsLink: "Terms and Conditions",
    termsSuffix: "",
    privacyPrefix:
      "I authorize the processing of my personal data according to the",
    privacyLink: "Privacy Policy",
    register: "Register",
    login: "Already have an account?",
    popup: {
      name: "Enter a valid name",
      lastname: "Enter a valid last name",
      phone: "Invalid phone number",
      email: "Enter a valid email",
      password: "Password must be at least 8 characters",
      match: "Passwords do not match",
      terms: "You must accept the Terms",
      privacy: "You must accept data processing",
      success: (name) =>
        `Registration successful. Welcome ${name}!`,
    },
    placeholders: {
      name: "First Name",
      lastname: "Last Name",
      email: "Email",
    },
    hint: "minimum 8 characters",
  },

  pt: {
    title: "Junte-se à Sístole.\nE faça parte dos nossos benefícios:",
    benefits: [
      "Encontre serviços médicos",
      "Gerencie facilmente seu histórico",
      "Ofereça seus serviços",
    ],
    name: "Nome",
    lastname: "Sobrenome",
    phone: "Celular",
    email: "Email",
    password: "Senha",
    confirmPassword: "Confirmar senha",
    termsPrefix: "Aceito os",
    termsLink: "Termos e Condições",
    termsSuffix: "",
    privacyPrefix: "Autorizo o tratamento dos meus dados pessoais conforme a",
    privacyLink: "Política de Privacidade",
    register: "Registrar",
    login: "Já tem uma conta?",
    popup: {
      name: "Digite um nome válido",
      lastname: "Digite um sobrenome válido",
      phone: "Número inválido",
      email: "Digite um email válido",
      password: "A senha deve ter no mínimo 8 caracteres",
      match: "As senhas não coincidem",
      terms: "Você deve aceitar os Termos",
      privacy: "Você deve autorizar o uso de dados",
      success: (name) =>
        `Registro realizado com sucesso. Bem-vindo ${name}!`,
    },
    placeholders: {
      name: "Nome",
      lastname: "Sobrenome",
      email: "Email",
    },
    hint: "mínimo 8 caracteres",
  },
};

// Idioma actual (cargado desde localStorage o por defecto "es")
let currentLang = localStorage.getItem("lang") || "es";

// Cambiar idioma desde el selector
document
  .getElementById("languageSelector")
  .addEventListener("change", function () {
    currentLang = this.value;
    localStorage.setItem("lang", currentLang);
    applyTranslations();
  });

// Función para aplicar traducciones a la página
function applyTranslations() {
  const t = translations[currentLang];

  document.querySelector(".left-panel h1").innerText = t.title;

  document.querySelectorAll(".benefits li").forEach((li, i) => {
    li.childNodes[2].nodeValue = " " + t.benefits[i];
  });

  document.querySelectorAll(".form-group label")[0].innerText = t.name;
  document.querySelectorAll(".form-group label")[1].innerText = t.lastname;
  document.querySelectorAll(".form-group label")[2].innerText = t.phone;
  document.querySelectorAll(".form-group label")[3].innerText = t.email;
  document.querySelector(".form-group label .hint").innerText = t.hint;
  document.querySelectorAll(".form-group label")[4].childNodes[0].nodeValue =
    t.password + " ";
  document.querySelectorAll(".form-group label")[5].innerText =
    t.confirmPassword;

  // Traduce los textos de los términos y condiciones y aviso de privacidad
  const termsSpan = document.querySelectorAll(".checkbox-item span")[0];
  const privacySpan = document.querySelectorAll(".checkbox-item span")[1];

  termsSpan.innerHTML = `${t.termsPrefix} <a href="#">${t.termsLink}</a> ${t.termsSuffix}`;
  privacySpan.innerHTML = `${t.privacyPrefix} <a href="#">${t.privacyLink}</a}`;

  document.querySelector(".btn-register").innerText = t.register;
  const loginLink = document.querySelector(".login-link");
  const loginAnchor = loginLink.querySelector("a");

  // Traduce el texto antes del link
  loginLink.childNodes[0].nodeValue = t.login + " ";

  // Traduce el texto del link
  loginAnchor.textContent =
    currentLang === "es"
      ? "Ingresa"
      : currentLang === "en"
        ? "Login"
        : "Entrar";

  document.getElementById("name").placeholder = t.placeholders.name;
  document.getElementById("lastname").placeholder = t.placeholders.lastname;
  document.getElementById("email").placeholder = t.placeholders.email;
}

// Función para obtener mensajes traducidos del popup
function getMsg(key, ...args) {
  const msg = translations[currentLang].popup[key];
  return typeof msg === "function" ? msg(...args) : msg;
}

// Aplicar traducciones al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("languageSelector");
  if (selector) selector.value = currentLang;

  applyTranslations();
});