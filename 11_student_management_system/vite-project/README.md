# Project Live Link:
    https://react-frontend-std-management-sytem.vercel.app/
---    
# Student Management System

A simple **Student Management System** built using React.js. This project helps to manage student records with basic CRUD operations.

I created this project to practice React.js, API integration, form validation, and frontend-backend communication.

## About the Project

The Student Management System allows users to add new students, view student details, update existing records, and delete student records.

This is a learning project developed as part of my Full Stack Development journey.

## Features

- View all student records
- Add a new student
- Edit student details
- Delete student records
- Form validation using Formik and Yup
- API integration using Axios
- Navigation using React Router
- Loading and error handling
- Responsive user interface

## Technologies Used

**Frontend:**
- React.js
- JavaScript
- React Router DOM
- React Bootstrap
- Bootstrap 5
- Axios
- Formik
- Yup
- CSS
- Vite

**Backend:**
- Node.js
- Express.js
- MongoDB

## Project Structure

```text
vite-project/
│
├── public/
├── src/
│   ├── api/
│   │   ├── studentAxios.js
│   │   └── studentFetch.js
│   │
│   ├── components/
│   │   ├── Student.jsx
│   │   └── StudentForm.jsx
│   │
│   ├── routes/
│   │   └── MainLayout.jsx
│   │
│   ├── style/
│   │   └── student.css
│   │
│   ├── ui/
│   │   ├── Navbar.jsx
│   │   ├── Error.jsx
│   │   └── Loading.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/charmeepaneliya/React-Frontend.git
```

**2. Open the project folder**

```bash
cd React-Frontend/11_student_management_system/vite-project
```

**3. Install dependencies**

```bash
npm install
```

**4. Create a `.env` file**

Add your backend API URL:

```env
VITE_BASE_URL=http://localhost:5000
```

Replace the URL with your actual backend server URL.

**5. Run the project**

```bash
npm run dev
```

Open the local URL shown in your terminal.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/getAllStudents` | Get all students |
| POST | `/add` | Add a student |
| GET | `/:id` | Get student by ID |
| PATCH | `/:id` | Update student |
| DELETE | `/:id` | Delete student |

## What I Learned

While building this project, I practiced:

- Creating reusable React components
- Managing forms using Formik
- Validating forms using Yup
- Integrating REST APIs using Axios
- Using React Router for navigation
- Performing CRUD operations
- Connecting frontend with backend
- Organizing project files and folders

## Author

**Charmee Paneliya**

- GitHub: [charmeepaneliya](https://github.com/charmeepaneliya)
- LinkedIn: [Charmee Paneliya](https://www.linkedin.com/in/charmee-paneliya-19552538a/)

---

*This project is created for learning and practice as a Full Stack Development student.*