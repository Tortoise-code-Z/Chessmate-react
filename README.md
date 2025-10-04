# CHESSMATE - Página de aprendizaje de ajedrez - Víctor Pérez

Aplicación web **frontend moderna** (con backend simulado del lado del cliente) para **cursos online**, totalmente **responsive** y diseñada 100% por mí desde cero en **Figma**.  
Desarrollada con un **stack moderno**, la plataforma contó con el apoyo de la **IA como copiloto**, que me ayudó a generar ideas y resolver dudas durante el desarrollo.

La plataforma permite a los usuarios:

-   Registrarse y gestionar su perfil.
-   Explorar y filtrar cursos disponibles.
-   Acceder a detalles completos de cada curso.
-   Comprar cursos y seguir su progreso en un **dashboard personalizado** y un **classroom virtual**.

Es ideal para **estudiantes** que buscan aprender en línea y para **empresas** que quieran ofrecer **formación digital** a sus equipos.

![Chessmate - Home](./src/assets/images//screenshots/screenshot-index.png)

---

## Tabla de Contenidos 🧭

-   [Demo](#demo)
-   [Características](#características)
-   [Instalación](#instalación)
-   [Uso](#uso)
-   [Estructura del proyecto](#estructura-del-proyecto)
-   [Tecnologías utilizadas](#tecnologías-utilizadas)
-   [Licencia](#licencia)
-   [Contacto](#contacto)

---

## Demo 🚀

-   Live: https://tortoise-code-z.github.io/Chessmate-react/
-   Imágenes del proyecto:  
    ![Home](./src/assets/images/screenshots/screenshot-index.png)  
    ![Courses](./src/assets/images/screenshots/screenshot-courses.png)
    ![CourseDetail](./src/assets/images/screenshots/screenshot-course-detail.png)
    ![Contact](./src/assets/images/screenshots/screenshot-contact.png)
    ![Dashboard](./src/assets/images/screenshots/screenshot-dashboard.png)
    ![Classroom](./src/assets/images/screenshots/screenshot-classroom.png)
    ![CourseObtainedClassroom](./src/assets/images/screenshots/screenshot-course-obtained-classroom.png)
    ![Login](./src/assets/images/screenshots/screenshot-login.png)
    ![Register](./src/assets/images/screenshots/screenshot-register.png)

---

## Características ✨

-   Diseño responsive para móviles y escritorio, ofreciendo buena experiencia en cualquier dispositivo
-   Animaciones suaves que mejoran la interacción del usuario
-   Validación de formularios con Zod para evitar errores en formularios
-   Gestión de estado global con Zustand para mantener datos consistentes entre páginas
-   Simulación de backend con localStorage para pruebas sin servidor real
-   Uso de React-query para manejar asincronías de forma eficiente
-   React-router-dom para una navegación fluida entre secciones
-   React-player para reproducción de videos dentro del classroom
-   Protección de rutas para evitar accesos no permitidos (Dashboard, course-classroom)
-   Feedback al usuario con mensajes de éxito, error y warnings para posibles datos de cursos incompletos

---

## Instalación 🛠️

### Prerrequisitos

-   **Node.js** (versión 18 o superior) — necesario para ejecutar el proyecto y las dependencias de npm.
-   **npm** — gestor de paquetes para instalar dependencias.
-   **Vite** — herramienta de build moderna utilizada para el proyecto (se instala automáticamente con `npm install`).
-   **Git** — si van a clonar el repositorio.

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/Tortoise-code-Z/Chessmate-react

# Entrar en el directorio
cd Chessmate-react

# Instalar dependencias
npm install
```

---

## Uso 💻

```bash
# Ejecutar el servidor de desarrollo
npm run dev

```

-   Acceder a: [http://localhost:XXXX](#)

---

## Estructura del proyecto 📁

```plaintext
Chessmate/
│
├── public/
│   └── fonts
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── consts/
│   ├── hooks/
│   ├── pages/
│   ├── schemas/
│   ├── types/
│   ├── utils/
│   └── App.tsx
│   └── index.css
│   └── main.tsx
│
├── package.json
└── README.md
```

---

## Tecnologías utilizadas 🧰

**Diseño:**

-   Figma — diseño de toda la interfaz desde cero, responsive y centrado en UX/UI

**Programación y herramientas:**

-   React + TypeScript — desarrollo del frontend
-   LocalStorage — simulación de backend y almacenamiento de datos del usuario
-   Git — control de versiones
-   GitHub — repositorio público y gestión del proyecto en la nube
-   npm — gestor de paquetes
-   Vite — herramienta de build y servidor de desarrollo
-   Inteligencia Artificial — apoyo como copiloto y generación de datos de la web

**Librerías y utilidades:**

-   React-Query — gestión eficiente de datos asincrónicos
-   React-Router-Dom — navegación y gestión de rutas
-   Zod + Resolvers — validación de formularios
-   React-Hook-Form — manejo de formularios
-   Zustand — gestión de estado global
-   EmblaCarousel — sliders y carrousels
-   React-Player — reproducción de videos

**Estilos:**

-   CSS Modules — estilos modulados para componentes, manteniendo scoped CSS

---

## Licencia 🧾

Este proyecto no tiene licencia formal.

-   **Puedes:**

    -   Ver el código en GitHub.
    -   Clonar el repositorio y ejecutar el proyecto localmente.
    -   Acceder al sitio en vivo y usarlo como referencia o inspiración.
    -   Mostrar capturas o la página en tu portfolio o redes sociales (LinkedIn, Behance, etc.).

-   **No puedes:**
    -   Redistribuir, copiar o incluir el código en otros proyectos sin permiso explícito.
    -   Vender o usar el código con fines comerciales.

---

## Contacto 📬

-   Portfolio: https://tortoise-code-z.github.io/portfolio/
-   Email: victorperez.brmte@passmail.com
-   LinkedIn: www.linkedin.com/in/víctor-pérez-developer
-   GitHub: https://github.com/Tortoise-code-Z
