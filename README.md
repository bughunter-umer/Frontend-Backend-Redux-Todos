# 📝 Todo App (Vite + React + Tailwind CSS + Redux Toolkit + PostgreSQL)

A modern and responsive **Todo Management Application** built using **Vite**, **React**, **Tailwind CSS**, and **Redux Toolkit**.  
The app stores todos in a **PostgreSQL database** via a REST API and uses **Axios** for API requests.

---

## 🚀 Features

- ➕ Add new todos
- ✅ Mark todos as completed
- 🗑 Delete todos
- 📦 Store todos in PostgreSQL database
- 🌐 REST API integration using Axios
- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 🔄 State management with Redux Toolkit

---

## 🛠 Tech Stack

**Frontend:**
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)

**Backend:**
- Node.js / Express.js
- PostgreSQL Database

---

## 📂 Project Structure

├── src
│ ├── components # Reusable UI components
│ ├── features # Redux slices & logic
│ ├── pages # App pages
│ ├── store # Redux store configuration
│ ├── App.jsx # Main component
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind styles
├── public # Static files
├── package.json
├── vite.config.js
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables
Create a .env file in the root directory and add:

env
Copy
Edit
VITE_API_URL=http://localhost:5000/api/todos
Run the development server

bash
Copy
Edit
npm run dev
Backend Setup (Node.js + PostgreSQL)

Create a PostgreSQL database

Configure database connection in backend .env

Run backend server with:

bash
Copy
Edit
npm start
📡 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Get all todos
POST	/api/todos	Add a new todo
DELETE	/api/todos/:id	Delete a todo
PUT	/api/todos/:id	Update a todo status
