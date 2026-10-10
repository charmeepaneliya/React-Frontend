# Charmee Paneliya | React Portfolio

A modern, responsive personal portfolio website built with React to showcase my technical skills, education, projects, and journey as a Full Stack Developer.

## 🌐 About the Project

This portfolio website presents my profile, technical skills, academic background, development training, and projects in one place.

It features a modern dark theme with neon green and cyan accents, responsive layouts, interactive components, and React Router for navigation between pages.

## ✨ Features

- **Home Page:** Introduction and developer profile.
- **About Page:** Personal introduction and career goals.
- **Skills Page:** Technical skills and technologies.
- **Projects Page:** Project cards with descriptions, technology badges, and external links.
- **Experience & Education Page:** Academic background and Full Stack Development training.
- **Testimonials Page:** Testimonial slider.
- **Contact Page:** Contact section for visitors.
- **React Router:** Navigation between different portfolio pages without traditional full-page navigation.
- **Nested Routing:** Shared layout with child pages, if configured in the router.
- **Dynamic Routing:** Project-specific detail pages using route parameters, if implemented.
- **Lazy Loading:** Loads page components when needed.
- **Suspense:** Displays a fallback UI while lazy-loaded pages are loading.
- **Error Handling:** Provides an error page for routing errors, if configured.
- **Responsive Design:** Supports desktop, tablet, and mobile screens.
- **Interactive UI:** Smooth transitions, hover effects, and navigation controls.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Bootstrap
- React Router
- Vite
- Git
- GitHub
- npm

## 📂 Projects

### 1. Restaurantly

A responsive restaurant landing page with attractive sections, Bootstrap components, and a clean user experience.

- **Technologies:** HTML, CSS, Bootstrap
- **Live Demo:** [View Project](https://restaurantly-1n7r.vercel.app/)
- **GitHub:** [View Source Code](https://github.com/charmeepaneliya/Restaurantly)

### 2. Weather App

A responsive weather application built with HTML, CSS, and JavaScript that displays real-time weather data.

- **Technologies:** HTML, CSS, JavaScript
- **Live Demo:** [View Project](https://weather-app-project-jet.vercel.app/)
- **GitHub:** [View Source Code](https://github.com/charmeepaneliya/Weather-App-Project)

### 3. ToDo App

An interactive task management application that supports task creation, editing, deletion, and completion tracking.

- **Technologies:** React
- **Live Demo:** [View Project](https://react-frontend-omega-one.vercel.app/)
- **GitHub:** [View Source Code](https://github.com/charmeepaneliya/React-Frontend/tree/main/ToDo-crud/vite-project)

### 4. Quiz App

An interactive quiz application with multiple-choice questions, score tracking, and instant results.

- **Technologies:** JavaScript, HTML, CSS
- **Live Demo:** [View Project](https://quiz-app-in-js-kappa.vercel.app/)
- **GitHub:** [View Source Code](https://github.com/charmeepaneliya/Quiz-App-in-js)

### 5. HTML Wireframe

A static HTML wireframe designed to visualize website layouts and content structure.

- **Technologies:** HTML
- **Live Demo:** [View Project](https://html-wireframe-omega.vercel.app/)
- **GitHub:** [View Source Code](https://github.com/charmeepaneliya/HTML-wireframe)

### 6. Image Slider

A responsive image slider with smooth transitions, navigation controls, and automatic slideshow functionality.

- **Technologies:** JavaScript, HTML, CSS
- **Live Demo:** [View Project](https://image-slider-project-in-js.vercel.app/)
- **GitHub:** [View Source Code](https://github.com/charmeepaneliya/Image-Slider-Project-in-js)

## 🧭 Routing

React Router is used to navigate between the portfolio pages.

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/skills` | Skills |
| `/projects` | Projects |
| `/experience` | Experience |
| `/testimonials` | Testimonials |
| `/contact` | Contact |
| `/projects/:id` | Project Details, if configured |

The exact route paths depend on the implementation in `App.jsx`.

### Routing Concepts

- **BrowserRouter / createBrowserRouter:** Manages client-side routing.
- **Nested Routes:** Displays child pages inside a shared layout.
- **Outlet:** Renders the matched child route inside the parent layout, if used.
- **Link / NavLink:** Navigates between pages.
- **useNavigate:** Navigates programmatically from a component.
- **Dynamic Routes:** Uses route parameters to identify a specific project, if implemented.
- **Lazy Loading:** Loads page components on demand.
- **Suspense:** Displays a fallback component during loading.

## 🚀 Getting Started

Follow these steps to run the project on your local computer.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

Replace `YOUR-REPOSITORY-URL` with your actual portfolio repository URL.

```bash
git clone YOUR-REPOSITORY-URL
```

**2. Navigate to the project folder**

```bash
cd charmee-portfolio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the website**

Open the local URL displayed in your terminal. With the default Vite configuration, it is usually:

```text
http://localhost:5173
```

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

The following is an example of the project structure. Actual filenames may vary depending on the implementation.

```text
charmee-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   ├── Projects-data.js
│   │   └── testimonials.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── routes/
│   │   └── MainLayout.jsx
│   ├── style/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🎨 Design

The portfolio uses a modern dark interface with the following colors:

- **Background:** `#080d1a`
- **Card Background:** `#111a2b`
- **Neon Green:** `#00f5a0`
- **Cyan:** `#00d9ff`
- **Main Text:** `#e8f0ff`

The design focuses on readability, responsiveness, and a professional developer portfolio experience.

## 👩‍💻 About Me

I am pursuing an M.Sc. in Information Technology and learning Full Stack Development. I enjoy building web applications, learning new technologies, and improving my programming skills through practical projects.

My goal is to grow as a Full Stack Developer by developing useful, responsive, and user-friendly web applications.

## 🔗 Connect With Me

- **GitHub:** [charmeepaneliya](https://github.com/charmeepaneliya)

## 🔮 Future Improvements

- Add more real-world projects.
- Continue improving accessibility and performance.
- Enhance project details and interactions.
- Expand full stack development skills.
- Add more features based on learning and feedback.

## 📄 License

This project was created for personal portfolio and learning purposes.
