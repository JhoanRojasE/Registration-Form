# Registro de Usuario

Interfaz de registro moderna, responsiva y multi-idioma para la plataforma **Sístole**, enfocada en la gestión de servicios médicos.

---

## Características

- Diseño moderno y responsive
- Soporte multi-idioma (ES, EN, PT)
- Persistencia de idioma con `localStorage`
- Selector de idioma con banderas (UI personalizada)
- Mostrar / ocultar contraseña con íconos dinámicos
- Validaciones completas en frontend
- Integración con `intl-tel-input` (teléfonos internacionales)
- Popups personalizados y traducibles
- Traducción total de la interfaz (labels, placeholders, mensajes, links)

---

## Estructura del proyecto
/registro
│── index.html
│── styles.css
│── app.js


---

## Tecnologías

- HTML5
- CSS3 (Flexbox + Responsive)
- JavaScript (Vanilla)
- intl-tel-input
- SVG Icons

---

## Instalación

```bash
git clone https://github.com/JhoanRojasE/Registration-Form.git
cd Registration-Form
```
Abrir index.html en el navegador

---

## Validación

| Campo        | Validación                  |
| ------------ | --------------------------- |
| Nombre       | Obligatorio                 |
| Apellido     | Obligatorio                 |
| Teléfono     | Número válido internacional |
| Email        | Formato válido              |
| Contraseña   | Mínimo 8 caracteres         |
| Confirmación | Debe coincidir              |
| Términos     | Obligatorio                 |
| Privacidad   | Obligatorio                 |

---

## Internacionalización
* Traducción dinámica sin recarga
* Uso de objeto translations
* Persistencia con localStorage
* Soporte para textos, placeholders, popups y links

---

## Notificaciones

Popup personalizado que reemplaza alert():

* Consistente con la UI
* Traducible según idioma
* Botón dinámico (Ej: "Entendido", "Got it", "Entendi")

---

## Responsive

Adaptado a:
* Escritorio
* Tablets
* Móviles
Incluye ajustes para inputs, layout y selector de país.

---

## Mejoras futuras
* Integración con backend
* Validación en tiempo real
* Autenticación y seguridad
* Modo oscuro

---

## Autor

Desarrollado por **Jhoan Rojas**

---

## Licencia

Este proyecto es propiedad de Colombia Biomedical. Todos los derechos reservados. No está permitido su uso, copia o distribución sin autorización previa.