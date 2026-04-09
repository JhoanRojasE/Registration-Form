# Registro de Usuario

Interfaz de registro moderna y responsiva para la plataforma **Sístole**, enfocada en la gestión de servicios médicos.

---

## Características

* Diseño moderno y responsive
* Mostrar / ocultar contraseña
* Validaciones completas en frontend:

  * Nombre y apellido obligatorios
  * Teléfono válido (10 dígitos)
  * Correo electrónico válido
  * Contraseña mínima de 8 caracteres
  * Confirmación de contraseña
  * Aceptación de términos y privacidad
* Notificaciones tipo popup (UI amigable)
* Código separado en HTML, CSS y JavaScript

---

## Estructura del proyecto

```
/registro
│── index.html
│── styles.css
│── app.js
```

---

## Tecnologías utilizadas

* HTML5
* CSS3 (Flexbox + Responsive Design)
* JavaScript (Vanilla JS)
* Google Material Icons

---

## Instalación y uso

1. Clona este repositorio:

```bash
git clone https://github.com/JhoanRojasE/Registration-Form.git
```

2. Abre el proyecto:

```bash
cd Registration-Form
```

3. Ejecuta el archivo:

* Abre `index.html` en tu navegador

---

## Validaciones implementadas

El formulario incluye validaciones en JavaScript antes de permitir el registro:

| Campo        | Validación                    |
| ------------ | ----------------------------- |
| Nombre       | Mínimo 1 caracter             |
| Apellido     | Mínimo 1 caracter             |
| Teléfono     | 10 dígitos numéricos          |
| Email        | Formato válido                |
| Contraseña   | Mínimo 8 caracteres           |
| Confirmación | Debe coincidir con contraseña |
| Términos     | Obligatorio aceptar           |
| Privacidad   | Obligatorio aceptar           |

---

## Sistema de notificaciones

Se implementa un **popup personalizado** que:

* Reemplaza los `alert()`
* Mantiene el diseño visual de la aplicación
* Muestra errores de forma clara y amigable

---

## Responsive Design

El diseño se adapta automáticamente a:

* Escritorio
* Dispositivos móviles
* Tablets

---

## Funcionalidades clave

### Mostrar / ocultar contraseña

Se utiliza una función JavaScript para alternar entre:

* `type="password"`
* `type="text"`

Además, cambia dinámicamente el ícono SVG.

---

## Posibles mejoras futuras

* Conexión con backend (Node.js / Flask / MongoDB)
* Encriptación de contraseñas
* Verificación de correo
* Validación en tiempo real (on input)
* Animaciones avanzadas
* Modo oscuro

---

## Autor

Desarrollado por **Jhoan Rojas**

---

## Licencia

Este proyecto es propiedad de Colombia Biomedical.
Todos los derechos reservados. No está permitido su uso,
copia o distribución sin autorización previa.